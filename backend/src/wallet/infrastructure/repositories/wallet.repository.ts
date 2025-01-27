import { Injectable } from '@nestjs/common';
import { CurrencyType } from '../../../../prisma/generated/client';
import { PrismaService } from '../../../prisma/prisma.service';
import { TransactionDto } from '../../application/dtos/transaction.dto';
import { Wallet } from '../../domain/entities/wallet.entity';
import { WalletTransaction } from '../../domain/entities/wallet.transaction.entity';
import { IWalletRepository } from '../../domain/interfaces/wallet.repository.interface';

@Injectable()
export class WalletRepository implements IWalletRepository {
  constructor(private prisma: PrismaService) {}

  async createWallet(userId: string): Promise<Wallet> {
    const wallet = await this.prisma.wallet.create({
      data: {
        userId,
        balancePesos: 0,
        balanceDollars: 0,
      },
    });

    return new Wallet(
      wallet.id,
      wallet.userId,
      wallet.balancePesos,
      wallet.balanceDollars,
      wallet.createdAt,
      wallet.updatedAt,
    );
  }

  async getWalletById(walletId: string): Promise<Wallet | null> {
    const wallet = await this.prisma.wallet.findUnique({
      where: { id: walletId },
    });

    if (!wallet) return null;

    return new Wallet(
      wallet.id,
      wallet.userId,
      wallet.balancePesos,
      wallet.balanceDollars,
      wallet.createdAt,
      wallet.updatedAt,
    );
  }

  async updateWalletBalances(
    walletId: string,
    currency: CurrencyType,
    amount: number,
  ): Promise<Wallet> {
    const field = currency === 'PESOS' ? 'balancePesos' : 'balanceDollars';

    const updatedWallet = await this.prisma.wallet.update({
      where: { id: walletId },
      data: {
        [field]: { increment: amount },
      },
    });

    return new Wallet(
      updatedWallet.id,
      updatedWallet.userId,
      updatedWallet.balancePesos,
      updatedWallet.balanceDollars,
      updatedWallet.createdAt,
      updatedWallet.updatedAt,
    );
  }

  async logTransaction(
    transaction: TransactionDto,
  ): Promise<WalletTransaction> {
    const createdTransaction = await this.prisma.walletTransaction.create({
      data: {
        walletId: transaction.walletId,
        amount: transaction.amount,
        type: transaction.type,
        currency: transaction.currency,
        description: transaction.description,
      },
    });

    return new WalletTransaction(
      createdTransaction.id,
      createdTransaction.walletId,
      createdTransaction.amount,
      createdTransaction.type,
      createdTransaction.currency,
      createdTransaction.createdAt,
    );
  }

  async getTransactions(walletId: string): Promise<WalletTransaction[]> {
    const transactions = await this.prisma.walletTransaction.findMany({
      where: { walletId },
    });

    return transactions.map(
      (t) =>
        new WalletTransaction(
          t.id,
          t.walletId,
          t.amount,
          t.type,
          t.currency,
          t.createdAt,
        ),
    );
  }
}
