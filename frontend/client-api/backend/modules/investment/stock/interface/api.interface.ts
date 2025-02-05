import { GetByTickerParams, GetByTickerResponse } from './getByTicker';
import { GetDetailsParams, GetDetailsResponse } from './getDetails';
import { GetTickersResponse } from './getTickers';
import { InvestParams } from './invest';

export interface StockApi {
  getByTicker: (params: GetByTickerParams) => Promise<GetByTickerResponse>;
  getTickers: () => Promise<GetTickersResponse>;
  getDetails: (params: GetDetailsParams) => Promise<GetDetailsResponse>;
  invest: (params: InvestParams) => Promise<void>;
}
