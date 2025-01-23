export interface GetOneParams {
  id: string;
}

export type GetOneResponse = FinancialTarget;

export type FinancialTarget = {
  name: string;
  amount: number;
  durationMonths: number;
  id: string;
  savedAmount: number;
  createdAt: string;
  category: string;
  isActive: boolean;
};
