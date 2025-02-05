'use client';

import { useFilteredTickers } from '@/hooks/use-filtered-tickers';
import { Ticker } from 'client-api/backend/modules/investment/stock/interface/getTickers';
import { TickerItem } from './ticker-item';
import { MList } from '@/components/motion/motion-list';
import { MItem } from '@/components/motion/motion-item';
import { EmptySection } from '@/components/ui/empty-section';

interface Props {
  tickers: Ticker[];
}

export function TickersList({ tickers }: Props) {
  const filteredTickers = useFilteredTickers(tickers);

  if (filteredTickers.length === 0) {
    return (
      <EmptySection
        icon='/svg/glass.svg'
        header='No hay acciones que cumplan los filtros actuales'
        subtitle=''
      />
    );
  }

  return (
    <MList className='flex flex-col gap-2'>
      {filteredTickers.map((ticker) => (
        <MItem key={ticker.symbol}>
          <TickerItem ticker={ticker} />
        </MItem>
      ))}
    </MList>
  );
}
