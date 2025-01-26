export interface GetOneParams {
  id: string;
}

export type GetOneResponse = FinancialTarget;

export interface FinancialTarget {
  id: string;
  name: string;
  progress: string;
  amount: string;
  isActive: boolean;
  category: string;
  dateTarget: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}
