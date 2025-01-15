import {Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import {ApiTags} from "@nestjs/swagger";
import {LoginDto} from "./dto/login.dto";

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  logi(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }
}
