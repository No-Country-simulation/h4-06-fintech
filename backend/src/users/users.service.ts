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
    try {
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

      // Enviar correo
      try {
        await this.loginMailService.sendUserConfirmationEmail(email);
      } catch (mailError) {
        console.error('Error enviando el correo:', mailError);
        throw new BadRequestException('No se pudo enviar el correo de confirmación.');
      }

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
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw new BadRequestException('Error al crear el usuario: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await this.prismaService.user.findMany();
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new BadRequestException('Error al obtener usuarios: ' + error.message);
    }
  }

  async findOne(id: string) {
    try {
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
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      throw new NotFoundException('Error al obtener el usuario: ' + error.message);
    }
  }

  async findByEmail(email: string) {
    try {
      return await this.prismaService.user.findUnique({
        where: {
          email,
        },
      });
    } catch (error) {
      console.error('Error al buscar usuario por email:', error);
      throw new BadRequestException('Error al buscar usuario por email: ' + error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
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
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      throw new NotFoundException(
        `Error al actualizar el usuario con ID ${id}: ${error.message}`,
      );
    }
  }

  async remove(id: string) {
    try {
      const remove = await this.prismaService.user.delete({
        where: { id },
      });
      return {
        message: 'User deleted successfully',
        data: remove,
      };
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      throw new NotFoundException(
        `Error al eliminar el usuario con ID ${id}: ${error.message}`,
      );
    }
  }
}
