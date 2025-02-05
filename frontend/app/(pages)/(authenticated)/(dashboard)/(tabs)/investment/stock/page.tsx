import { Text } from '@/components/ui/text';
import { backend } from '@api';
import { Loader } from '@/components/ui/loader';
import { TickersList } from './_components/tickers-list';
import { TickersSectionHeader } from './_components/tickers-section-header';
import { Suspense } from 'react';

export default async function StocksPage() {
  const tickers = await backend.investment.stockApi.getTickers();

  return (
    <Suspense fallback={<Loader />}>
    <section className='flex flex-col gap-12'>
      <header>
        <Text variant='header'>Acciones</Text>
      </header>
      <section className='flex flex-col gap-8'>
        <Suspense fallback={<Loader />}>
          <TickersSectionHeader />
          <TickersList tickers={tickers} />
        </Suspense>
      </section>
    </section>
    </Suspense>
  );
}
