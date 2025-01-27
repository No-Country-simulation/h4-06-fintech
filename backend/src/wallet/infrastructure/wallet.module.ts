import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CreateWalletUseCase } from '../application/usecases/create.wallet.use-case';
import { MakeTransactionUseCase } from '../application/usecases/make.transaction.use-case';
import { WalletController } from '../presentation/wallet.controller';
import { WalletTransactionController } from '../presentation/wallet.transaction.controller';
import { WalletRepository } from './repositories/wallet.repository';

@Module({
  imports: [PrismaModule],
  controllers: [WalletController, WalletTransactionController],
  providers: [
    WalletRepository,
    CreateWalletUseCase,
    MakeTransactionUseCase,
    {
      provide: 'IWalletRepository',
      useClass: WalletRepository,
    },
  ],
  exports: [WalletRepository, CreateWalletUseCase, MakeTransactionUseCase],
})
export class WalletModule {}
