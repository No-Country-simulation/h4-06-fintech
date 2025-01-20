import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
    const findAll = await this.prismaService.user.findMany();
    return findAll;
  }

  async findOne(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
      include: {
        wallet: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`No se encontró un usuario con el ID: ${id}`);
    }

    return user;
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundOfHashing,
      );
    }

    const update = await this.prismaService.user.update({
      where: { id },
      data: {
        ...updateUserDto,
      },
    });

    return {
      message: 'User updated successfully',
      data: update,
    };
  }

  async remove(id: string) {
    const remove = await this.prismaService.user.delete({
      where: { id },
    });
    return {
      message: 'User deleted successfully',
      data: remove,
    };
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

    return user;
  }
}
