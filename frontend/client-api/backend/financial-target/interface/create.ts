import { FinancialTarget } from './getOne';

export interface CreateParams {
  name: string;
  amount: number;
  durationMonths: number;
  category: string;
}

export type CreateResponse = FinancialTarget;
