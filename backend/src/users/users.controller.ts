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
} from '@nestjs/common';
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
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
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
    const user = await this.usersService.confirmEmail(token);

    // Generate access token and set it to response
    const accessToken = this.usersService.generateAccessToken(user);

    console.log('TOKEN DESDE EL BACK');
    console.log({ accessToken });

    // 1 - En vez de setear la cookie desde el backend, mandamos la cookie como parte
    // de la url, una vez llega al middleware, se lee el token y se lo setea el front.

    const url = `${process.env.FRONTEND_URL}/onboarding?token=${accessToken}`;
    // Redirect to the frontend onboarding page with the access token in the header
    console.log({ url });

    return res.redirect(307, url);
  }
}
