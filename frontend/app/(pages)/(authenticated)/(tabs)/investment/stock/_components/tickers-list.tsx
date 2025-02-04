'use client';

import { useFilteredTickers } from '@/hooks/use-filtered-tickers';
import { Ticker } from 'client-api/backend/modules/investment/stock/interface/getTickers';
import { TickerItem } from './ticker-item';

interface Props {
  tickers: Ticker[];
}

export function TickersList({ tickers }: Props) {
  const filteredTickers = useFilteredTickers(tickers);

  return (
    <ul className='flex flex-col gap-2'>
      {filteredTickers.map((ticker) => (
        <TickerItem
          ticker={ticker}
          key={ticker.symbol}
        />
      ))}
    </ul>
  );
}
