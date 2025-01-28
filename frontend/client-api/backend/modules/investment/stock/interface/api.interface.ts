import { GetByTickerParams, GetByTickerResponse } from './getByTicker';
import { GetTickersResponse } from './getTickers';

export interface StockApi {
  getByTicker: (params: GetByTickerParams) => Promise<GetByTickerResponse>;
  getTickers: () => Promise<GetTickersResponse>;
}
