import {BadRequestException, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginMailsService } from '../login-mails/login-mails.service';

export const roundOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private loginMailService: LoginMailsService,
  ) {}

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findFirst({
      where: { email },
    });
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    await this.findByEmail(createUserDto.email);
    try {
      const hashedPassword = await bcrypt.hash(
          createUserDto.password,
          roundOfHashing,
      );

      const { email, profile, ...rest } = createUserDto;
      rest.password = hashedPassword;
      await this.loginMailService.sendUserConfirmationEmail(email);

      const user = await this.prismaService.user.create({
        data: {
          ...rest,
          email,
          profile: {
            create: profile
          }
        },
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
        },
      });

      return userWithWallet;
    } catch (error) {
      new HttpException(
            'Internal server error',
            HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll() {
    try {
      const findAll = await this.prismaService.user.findMany({
        include: {
          profile: true,
          wallet: true,
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
          profile: true,
          wallet: true,
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
}
