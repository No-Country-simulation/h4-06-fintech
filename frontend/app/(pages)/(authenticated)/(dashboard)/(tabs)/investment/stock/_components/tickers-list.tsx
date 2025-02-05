'use client';

import { useFilteredTickers } from '@/hooks/use-filtered-tickers';
import { Ticker } from 'client-api/backend/modules/investment/stock/interface/getTickers';
import { TickerItem } from './ticker-item';
import { MList } from '@/components/motion/motion-list';
import { MItem } from '@/components/motion/motion-item';

interface Props {
  tickers: Ticker[];
}

export function TickersList({ tickers }: Props) {
  const filteredTickers = useFilteredTickers(tickers);

  return (
    <MList className='flex flex-col gap-2'>
      {filteredTickers.map((ticker) => (
        <MItem key={ticker.symbol}>
          <TickerItem
            ticker={ticker}
          />
        </MItem>
      ))}
    </MList>
  );
}
