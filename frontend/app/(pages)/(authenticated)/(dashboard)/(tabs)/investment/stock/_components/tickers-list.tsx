import { backend } from '@api';
import { FilteredTickersList } from './filtered-tickers-list';

export async function TickersList() {
  const tickers = await backend.investment.stockApi.getTickers();

  return <FilteredTickersList tickers={tickers} />;
}
