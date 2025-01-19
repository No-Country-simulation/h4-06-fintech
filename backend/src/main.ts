import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe, Logger } from '@nestjs/common';

import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  // Configurar Helmet con opciones específicas
  app.use(
    helmet({
      contentSecurityPolicy: false, // Deshabilita CSP si causa conflictos con librerías frontend
    }),
  );

  // Validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configuración de CORS
  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') || '*',
    credentials: true,
  });

  // Configurar Swagger
  setupSwagger(app);

  const port = process.env.PORT || 5000;
  await app.listen(port);
  logger.log(`🚀 Server is running on: http://localhost:${port}`);
}
bootstrap();
