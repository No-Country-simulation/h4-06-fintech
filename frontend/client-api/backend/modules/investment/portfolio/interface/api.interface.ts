import { GetParams, GetResponse } from './get';

export interface PortfolioApi {
  get: (params: GetParams) => Promise<GetResponse>;
}
