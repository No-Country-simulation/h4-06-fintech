import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

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
    origin: 'domain-name',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  });

  // Configurar Swagger
  setupSwagger(app);

  const port = process.env.PORT || 5000;
  await app.listen(port);
  logger.log(`🚀 Server is running on: http://localhost:${port}`);
}
bootstrap();
