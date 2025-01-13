import { Module } from '@nestjs/common';
import { WalletController } from '../presentation/wallet.controller';
import { WalletRepository } from '../infrastructure/repositories/wallet.repository';
import { PrismaModule } from '../../prisma/prisma.module';
import { CreateWalletUseCase } from '../application/usecases/create.wallet.use-case';

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
