import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CreateWalletUseCase } from '../application/usecases/create.wallet.use-case';
import { WalletController } from '../presentation/wallet.controller';
import { WalletRepository } from './repositories/wallet.repository';

@Module({
  imports: [PrismaModule],
  controllers: [WalletController],
  providers: [
    WalletRepository,
    CreateWalletUseCase,
    {
      provide: 'IWalletRepository',
      useClass: WalletRepository,
    },
  ],
  exports: [WalletRepository, CreateWalletUseCase],
})
export class WalletModule {}
