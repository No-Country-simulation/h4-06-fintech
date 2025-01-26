import { Inject } from '@nestjs/common';
import {
  CurrencyType,
  TransactionType,
} from '../../../../prisma/generated/client';
import { IWalletRepository } from '../../domain/interfaces/wallet.repository.interface';
import { TransactionDto } from '../dtos/transaction.dto';

export class MakeTransactionUseCase {
  constructor(
    @Inject('IWalletRepository')
    private readonly walletRepository: IWalletRepository,
  ) {}

  async execute(dto: TransactionDto) {
    const wallet = await this.walletRepository.getWalletById(dto.walletId);
    if (!wallet) throw new Error('Wallet not found');

    if (
      dto.type === TransactionType.WITHDRAWAL &&
      dto.amount > wallet[dto.currency.toLowerCase()]
    ) {
      throw new Error('Insufficient funds');
    }

    const updatedWallet = await this.walletRepository.updateWalletBalances(
      dto.walletId,
      dto.currency as CurrencyType,
      dto.type === TransactionType.DEPOSIT ? dto.amount : -dto.amount,
    );

    await this.walletRepository.logTransaction(dto);

    return updatedWallet;
  }
}
