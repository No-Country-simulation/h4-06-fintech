import { Text } from '@/components/ui/text';
import { backend } from '@api';
import { TickerItem } from './_components/ticker-item';

export default async function StocksPage() {
  const tickers = await backend.investment.stockApi.getTickers();

  return (
    <section className='flex flex-col gap-12'>
      <header>
        <Text variant='header'>Acciones</Text>
      </header>
      <ul className='flex flex-col gap-2 divide-y'>
        {tickers.map((ticker) => (
          <TickerItem
            ticker={ticker}
            key={ticker.symbol}
          />
        ))}
      </ul>
    </section>
  );
}
