export interface MakeResponseParams {
  type: TransactionType;
  currency: CurrencyType;
  amount: number;
  walletId: string;
}

export type TransactionType = 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER';

export type CurrencyType = 'DOLLARS' | 'PESOS';
