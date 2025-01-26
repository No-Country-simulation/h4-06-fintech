import { AddFundsParams } from './addFunds';
import { CreateParams } from './create';
import { getAllResponse } from './getAll';
import { GetOneParams, GetOneResponse } from './getOne';
import { ToggleStatusParams } from './toggleStatus';

export interface FinancialTargetAPI {
  getAll: () => Promise<getAllResponse>;
  getOne: (params: GetOneParams) => Promise<GetOneResponse>;
  toggleStatus: (params: ToggleStatusParams) => Promise<void>;
  addFunds: (params: AddFundsParams) => Promise<void>;
  create: (params: CreateParams) => Promise<void>;
}
