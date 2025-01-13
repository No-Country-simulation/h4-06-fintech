import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { WalletModule } from './wallet/infrastructure/wallet.module';

@Module({
  imports: [PrismaModule, WalletModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
