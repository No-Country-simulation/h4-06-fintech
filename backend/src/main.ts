import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  console.log(NestFactory)
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  await app.listen(port);
  console.log(`🚀 Server is running on: http://localhost:${port}`);
}
bootstrap();
