import { CurrencyType, TransactionType } from '@prisma/client';

export class TransactionDto {
  walletId: string;
  amount: number;
  currency: CurrencyType;
  type: TransactionType;
  description?: string;
}
