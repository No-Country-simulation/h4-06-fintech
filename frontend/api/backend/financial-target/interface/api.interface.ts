import { getAllResponse } from './getAll';
import { GetOneParams, GetOneResponse } from './getOne';

export interface FinancialTargetAPI {
  getAll: () => Promise<getAllResponse>;
  getOne: (params: GetOneParams) => Promise<GetOneResponse>;
}
