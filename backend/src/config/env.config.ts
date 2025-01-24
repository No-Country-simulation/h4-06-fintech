import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

export const EnvConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  corsOrigin: process.env.CORS_ORIGIN?.split(',') || ['*'],
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfig],
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class EnvConfigModule {}
