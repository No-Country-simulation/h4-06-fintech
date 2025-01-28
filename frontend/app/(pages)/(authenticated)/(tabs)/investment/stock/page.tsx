import { Text } from '@/components/ui/text';
import { backend } from '@api';
import Link from 'next/link';

export default async function StocksPage() {
  const tickers = await backend.investment.stockApi.getTickers();

  return (
    <section className='flex flex-col gap-12'>
      <header>
        <Text variant='header'>Acciones</Text>
      </header>
      <ul className='flex flex-col divide-y'>
        {tickers.map((ticker) => (
          <Link
            className='p-2 transition-colors hover:bg-primary/10'
            key={ticker.symbol}
            href={`/investment/stock/${ticker.symbol}`}
          >
            {ticker.companyName}
          </Link>
        ))}
      </ul>
    </section>
  );
}
