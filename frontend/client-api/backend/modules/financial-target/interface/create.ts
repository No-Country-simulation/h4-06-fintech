import { FinancialTarget } from './getOne';

export interface CreateParams {
  name: string;
  amount: number;
  durationMonths: number;
  category: 'otro';
}

export type CreateResponse = FinancialTarget;
