import { PageHeader } from '@/components/common/page/page-header';
import { Button } from '@/components/ui/button';
import { backend } from '@api';
import { CardInformation } from '../../stock/[slug]/_components/card-information';
import ComparativeTab from '../../stock/[slug]/_components/tabs/comparative-tab/comparative-tab';
import { InvestEvolution } from './_components/invest-evolution';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const ticker = await backend.investment.stockApi.getByTicker({
    ticker: slug,
  });

  return (
    <PageHeader title='Mis inversiones'>
      <CardInformation
        slug={slug}
        info={ticker}
      />
      <ComparativeTab />
      <InvestEvolution
        currentPrice={ticker.price.current}
        symbol={slug}
      />
      <footer className='mt-12 flex items-center justify-end gap-12'>
        <Button
          className='w-full max-w-[220px] border border-green-600 text-lg text-green-600'
          variant='ghost'
        >
          Vender
        </Button>
        <Button
          className='w-full max-w-[220px] rounded-xl text-lg'
          variant='secondary'
        >
          Invertir más
        </Button>
      </footer>
    </PageHeader>
  );
}
