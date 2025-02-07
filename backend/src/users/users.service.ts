import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'src/auth/strategy/jwt.strategy';
import { User } from '../../prisma/generated/client';
import { LoginMailsService } from '../login-mails/login-mails.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, InvestmentPortfolio } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Investment } from '../investment-portfolio/dto/create-investment-portfolio.dto';

export const roundOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private loginMailService: LoginMailsService,
    private jwtService: JwtService,
  ) {}

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findFirst({
      where: { email },
    });
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    createUserDto.email.toLowerCase();
    const user = await this.findByEmail(createUserDto.email);
    if (user) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    try {
      const hashedPassword = await bcrypt.hash(
        createUserDto.password,
        roundOfHashing,
      );

      const { email, profile, financialRadiographies, investmentPortfolio, ...rest } = createUserDto;
      rest.password = hashedPassword;

      const user = await this.prismaService.user.create({
        data: {
          ...rest,
          email,
          profile: {
            create: profile,
          },
          financialRadiographies: {
            create: financialRadiographies,
          },
          investmentPortfolio: {
            create: {name: "newPortfolio",}, 
          },
        }
      });

      await this.prismaService.wallet.create({
        data: {
          userId: user.id,
          balancePesos: 0,
          balanceDollars: 0,
        },
      });

      const userWithWallet = await this.prismaService.user.findUnique({
        where: { id: user.id },
        include: {
          wallet: true,
          profile: true,
          financialRadiographies: true,
          investmentPortfolio: true,
        },
      });

      // Generate token with user id and send it to email template to confirm account
      const token = this.jwtService.sign({ id: user.id });
      const link = `${process.env.BASE_URL}/users/confirm/${token}`;
      await this.loginMailService.sendUserConfirmationEmail(email, link);

      return userWithWallet;
    } catch (error) {
      console.log(error)
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const findAll = await this.prismaService.user.findMany({
        include: {
          profile: true,
          wallet: true,
          comment: true,
          financialRadiographies: true,
          target: true,
          customization: true,
          investmentPortfolio: true,
        },
      });
      return findAll;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const findOne = await this.prismaService.user.findUnique({
        where: { id },
        include: {
          profile: true,
          wallet: true,
          comment: true,
          financialRadiographies: true,
          investmentPortfolio: true,
          target: true,
          customization: true,
        },
      });
      if (!findOne) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return findOne;
    } catch (error) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    try {
      if (updateUserDto.password) {
        updateUserDto.password = await bcrypt.hash(
          updateUserDto.password,
          roundOfHashing,
        );
      }

      const { profile, financialRadiographies, investmentPortfolio, ...rest } = updateUserDto;

      const updateData: any = {
        ...rest,
      };

      if (profile) {
        updateData.profile = {
          upsert: {
            create: profile,
            update: profile,
          },
        };
      }

      if (investmentPortfolio) {
        updateData.investmentPortfolio = {
          upsert: {
            create: investmentPortfolio,
            update: investmentPortfolio,
          },
        };
      }

      if (financialRadiographies) {
        updateData.financialRadiographies = {
          upsert: {
            create: financialRadiographies,
            update: financialRadiographies,
          },
        };
      }

      if (investmentPortfolio) {
        updateData.investmentPortfolio = {
          upsert: {
            create: investmentPortfolio,
            update: investmentPortfolio,
          },
        };
      }

      const update = await this.prismaService.user.update({
        where: { id },
        data: updateData,
        include: {
          profile: true,
          wallet: true,
          comment: true,
          financialRadiographies: true,
          target: true,
          customization: true,
          investmentPortfolio: true,
        },
      });

      return {
        message: 'User updated successfully',
        data: update,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      const remove = await this.prismaService.user.delete({
        where: { id },
      });
      return {
        message: 'User deleted successfully',
        data: remove,
      };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async confirmEmail(token: string) {
    let payload: JwtPayload;
    try {
      payload = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
    } catch (error) {
      throw new BadRequestException('Token inválido o expirado.');
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: payload.id },
    });

    if (!user) {
      throw new BadRequestException('Este usuario no existe');
    }

    if (user.isEmailVerified) {
      throw new BadRequestException('Esta cuenta ya está verificada.');
    }

    await this.prismaService.user.update({
      where: { id: user.id },
      data: { isEmailVerified: true },
    });

    return { message: 'Cuenta verificada con éxito', user };
  }

  generateAccessToken(user: User): string {
    const payload = { id: user.id };
    const isProduction = process.env.NODE_ENV === 'production';
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: isProduction ? '10m' : '24h',
    });
  }
}
