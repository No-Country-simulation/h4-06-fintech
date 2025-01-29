import { Text } from '@/components/ui/text';
import { backend } from '@api';

import { TickersList } from './_components/tickers-list';
import { TickersSectionHeader } from './_components/tickers-section-header';

export default async function StocksPage() {
  const tickers = await backend.investment.stockApi.getTickers();

  return (
    <section className='flex flex-col gap-12'>
      <header>
        <Text variant='header'>Acciones</Text>
      </header>
      <section className='flex flex-col gap-8'>
        <TickersSectionHeader />
        <TickersList tickers={tickers} />
      </section>
    </section>
  );
}
