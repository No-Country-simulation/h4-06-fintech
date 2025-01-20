import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    await this.loginMailService.sendUserConfirmationEmail(email);

    const user = await this.prismaService.user.create({
      data: {
        ...createUserDto,
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
}
