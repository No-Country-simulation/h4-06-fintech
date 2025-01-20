import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'src/auth/strategy/jwt.strategy';
import { LoginMailsService } from '../login-mails/login-mails.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export const roundOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private loginMailService: LoginMailsService,
    private jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.prismaService.user.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (existingUser) {
      throw new BadRequestException(
          'El correo electrónico ya está registrado. Por favor, utiliza otro correo electrónico.',
      );
    }
    try {
      const hashedPassword = await bcrypt.hash(
          createUserDto.password,
          roundOfHashing,
      );

    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundOfHashing,
    );

    const { email } = createUserDto;
    createUserDto.password = hashedPassword;

    const user = await this.prismaService.user.create({
      data: {
        ...createUserDto,
      },
    });

    // Generate token with user id and send it to email template to confirm account
    const token = this.jwtService.sign({ id: user.id });
    const link = `${process.env.BASE_URL}/users/confirm/${token}`;
    await this.loginMailService.sendUserConfirmationEmail(email, link);

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
      },
    });

    return userWithWallet;
  }

  async findAll() {
    try {
      const findAll = await this.prismaService.user.findMany({
        include: {
          profile: true
        }
      });
      return findAll;
    } catch (error) {
      throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: string) {
    try {
      const findOne = await this.prismaService.user.findUnique({
        where: { id },
        include: {
          profile: true
        }
      });
      if (!findOne) {
        throw new HttpException(
            'User not found',
            HttpStatus.NOT_FOUND
        );
      }
      return findOne;
    } catch (error) {
        throw new HttpException(
            'Internal server error',
            HttpStatus.INTERNAL_SERVER_ERROR
        );
    }



  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    try {
      if (updateUserDto.password) {
        updateUserDto.password = await bcrypt.hash(
            updateUserDto.password,
            roundOfHashing,
        );
      }

      const { profile, ...rest } = updateUserDto;

      const update = await this.prismaService.user.update({
        where: { id },
        data: {
          ...rest,
          profile: {
            create: profile
          }
        },
      });

      return {
        message: 'User updated successfully',
        data: update,
      };
    } catch (error) {
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
    const payload: JwtPayload = this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET,
    });

    const user = await this.prismaService.user.findUnique({
      where: {
        id: payload.id,
      },
    });

    if (!user) {
      throw new BadRequestException('Este usuario no existe');
    }

    if (user.isEmailVerified) {
      throw new BadRequestException('Esta cuenta ya esta verificada');
    }

    await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        isEmailVerified: true,
      },
    });

    return user;
  }

  generateAccessToken(user: User): string {
    const payload = { id: user.id };
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '10m',
    });
  }
}
