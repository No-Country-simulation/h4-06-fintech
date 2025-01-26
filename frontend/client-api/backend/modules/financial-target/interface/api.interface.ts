import { AddFundsParams } from './addFunds';
import { CreateParams, CreateResponse } from './create';
import { DeleteParams } from './delete';
import { getAllResponse } from './getAll';
import { GetOneParams, GetOneResponse } from './getOne';
import { ToggleStatusParams } from './toggleStatus';

export interface FinancialTargetAPI {
  getAll: () => Promise<getAllResponse>;
  getOne: (params: GetOneParams) => Promise<GetOneResponse>;
  toggleStatus: (params: ToggleStatusParams) => Promise<void>;
  addFunds: (params: AddFundsParams) => Promise<void>;
  create: (params: CreateParams) => Promise<CreateResponse>;
  delete: (params: DeleteParams) => Promise<void>;
}
