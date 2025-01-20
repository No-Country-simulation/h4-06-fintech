import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Login estándar con email y password
  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({ id: user.id }),
    };
  }

  // Validación e inicio de sesión con Google
  async validateGoogleUser(googleUser: CreateUserDto): Promise<AuthEntity> {
    try {
      let user = await this.userService.findByEmail(googleUser.email);

      if (!user) {
        const randomPassword = randomBytes(16).toString('hex');
        const hashedPassword = await bcrypt.hash(randomPassword, 10);

        user = await this.userService.create({
          email: googleUser.email,
          firstName: googleUser.firstName,
          lastName: googleUser.lastName,
          password: hashedPassword,
          avatarUrl: googleUser.avatarUrl,
          profile: googleUser.profile
        });
      }

      return {
        accessToken: this.jwtService.sign({ id: user.id, email: user.email }),
      };
    } catch (error) {
      console.error('Google authentication error:', error);
      throw new UnauthorizedException(
        'An error occurred during Google authentication',
      );
    }
  }
}
