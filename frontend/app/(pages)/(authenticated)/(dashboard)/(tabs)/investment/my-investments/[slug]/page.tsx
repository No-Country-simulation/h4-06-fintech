import { PageHeader } from '@/components/common/page/page-header';
import { Button } from '@/components/ui/button';
import { backend } from '@api';
import { CardInformation } from '../../stock/[slug]/_components/card-information';
import ComparativeTab from '../../stock/[slug]/_components/tabs/comparative-tab/comparative-tab';
import { InvestEvolution } from './_components/invest-evolution';
import { getPriceInfo } from '@/lib/get-price-info';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const {
    data: { stock, amountInvested },
  } = await backend.investment.stockApi.getInvest({ id: slug });

  const { changePercent, isUp } = getPriceInfo({
    current: stock.price.current,
    previousClose: stock.price.dayLow,
  });

  return (
    <PageHeader title='Mis inversiones'>
      <CardInformation
        slug={stock.symbol}
        info={{
          changePercent: changePercent,
          currentPrice: stock.price.current,
          isUp,
          name: stock.name,
          previousClose: stock.price.dayLow,
        }}
      />
      <ComparativeTab />
      <InvestEvolution
        amountInvested={amountInvested}
        currentPrice={stock.price.current}
        symbol={slug}
      />
      <footer className='mt-12 flex items-center justify-end gap-12'>
        <Button
          className='w-full max-w-[220px] border border-green-600 text-lg text-green-600'
          variant='ghost'
        >
          Vender
        </Button>
        <Link href={`/investment/stock/${stock.symbol}/invest`}>
          <Button
            className='w-full max-w-[220px] rounded-xl text-lg'
            variant='secondary'
          >
            Invertir más
          </Button>
        </Link>
      </footer>
    </PageHeader>
  );
}
