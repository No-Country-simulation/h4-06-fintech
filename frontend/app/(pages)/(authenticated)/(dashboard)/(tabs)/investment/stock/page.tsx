import { Loader } from '@/components/ui/loader';
import { TickersList } from './_components/tickers-list';
import { TickersSectionHeader } from './_components/tickers-section-header';
import { Suspense } from 'react';
import { PageHeader } from '@/components/common/page/page-header';
import { SkeletonList } from '@/components/ui/skeleton-list';

export default async function StocksPage() {
  return (
    <PageHeader title='Acciones'>
      <section className='flex flex-col gap-8'>
        <Suspense fallback={<Loader />}>
          <TickersSectionHeader />
        </Suspense>
        <Suspense fallback={<SkeletonList />}>
          <TickersList />
        </Suspense>
      </section>
    </PageHeader>
  );
}
