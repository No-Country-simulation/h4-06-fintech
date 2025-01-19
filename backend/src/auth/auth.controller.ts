import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from './decorators/public.decorator';
import { GoogleAuthGuard } from './guards/google-auth.guard';

@Controller('auth')
@ApiTags('auth') // Agrupa los endpoints bajo la categoría 'auth'
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Iniciar sesión con email y contraseña' })
  @ApiBody({ type: LoginDto, description: 'Credenciales de acceso' })
  @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas' })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiOperation({ summary: 'Obtener información del usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Perfil del usuario' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  getProfile(@Req() req) {
    return req.user;
  }

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  @ApiOperation({ summary: 'Redirigir al flujo de OAuth de Google' })
  @ApiResponse({ status: 302, description: 'Redirección a Google OAuth' })
  googleLogin() {
    // Este endpoint redirige al flujo de OAuth de Google
  }

  @Public()
  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  @ApiOperation({ summary: 'Callback del flujo de Google OAuth' })
  @ApiResponse({
    status: 302,
    description: 'Redirección con el token de autenticación',
  })
  async googleCallback(@Req() req, @Res() res) {
    const googleUser = req.user;

    const authResponse = await this.authService.validateGoogleUser(googleUser);

    res.redirect(`http://localhost:4000?token=${authResponse.accessToken}`);
  }
}
