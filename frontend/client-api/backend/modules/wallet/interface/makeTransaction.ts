export interface MakeResponseParams {
  type: TransactionType;
  currency: CurrencyType;
  amount: number;
}

export type TransactionType = 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER';

export type CurrencyType = 'DOLLARS' | 'PESOS';
