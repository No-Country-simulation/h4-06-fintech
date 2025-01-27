import {
  CurrencyType,
  TransactionType,
} from '../../../../prisma/generated/client';

export class WalletTransaction {
  constructor(
    public id: string,
    public walletId: string,
    public amount: number,
    public type: TransactionType,
    public currency: CurrencyType,
    public createdAt: Date,
  ) {}

  isDeposit(): boolean {
    return this.type === 'DEPOSIT';
  }

  isWithdrawal(): boolean {
    return this.type === 'WITHDRAWAL';
  }
}
