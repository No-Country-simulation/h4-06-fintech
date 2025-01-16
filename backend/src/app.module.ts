import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WalletModule } from './wallet/infrastructure/wallet.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GoogleController } from './google/google.controller';
import { GoogleStrategy } from "./google/strategy/google.strategy";
import { ProfileUserModule } from './profile-user/profile-user.module';

@Module({
  imports: [PrismaModule, WalletModule, AuthModule, UsersModule, ProfileUserModule],
  controllers: [AppController, GoogleController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {
  constructor() {
    console.log('AppModule loaded');
  }
}
