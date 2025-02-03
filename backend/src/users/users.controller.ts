import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
 HttpException, HttpStatus } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
  @Get('confirm/:token')
  async confirm(
    @Param('token') token: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const user = await this.usersService.confirmEmail(token);
      const accessToken = this.usersService.generateAccessToken(user.user);

      // Setear el token en una cookie segura
      res.cookie('access_token', accessToken, {
        httpOnly: true, // Evita que el frontend acceda al token
        secure: process.env.NODE_ENV === 'production', // Solo en HTTPS en producción
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24, // 1 día de duración
      });
  
      return res.redirect(303, `${process.env.FRONTEND_URL}/onboarding?token=${accessToken}`);
    } catch (error) {
      console.error('Error confirming email:', error);
      throw new HttpException('Invalid or expired token', HttpStatus.BAD_REQUEST);
    }
  }
  
}
