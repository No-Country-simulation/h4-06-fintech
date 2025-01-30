import { GetByTickerParams, GetByTickerResponse } from './getByTicker';
import { GetDetailsParams, GetDetailsResponse } from './getDetails';
import { GetTickersResponse } from './getTickers';

export interface StockApi {
  getByTicker: (params: GetByTickerParams) => Promise<GetByTickerResponse>;
  getTickers: () => Promise<GetTickersResponse>;
  getDetails: (params: GetDetailsParams) => Promise<GetDetailsResponse>;
}
