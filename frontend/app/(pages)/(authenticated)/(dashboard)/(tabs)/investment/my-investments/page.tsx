import { PageHeader } from '@/components/common/page/page-header';
import { backend } from '@api';
import { MyInvestmentItem } from './_components/my-investment-item';
import { MItem } from '@/components/motion/motion-item';
import { MList } from '@/components/motion/motion-list';

export default async function MyInvestmentsPage() {
  const tickers = (await backend.investment.stockApi.getTickers()).slice(0, 5);

  return (
    <PageHeader title='Mis inversiones'>
      <MList className='flex flex-col gap-3'>
        {tickers.map((ticker) => (
          <MItem key={ticker.symbol}>
            <MyInvestmentItem ticker={ticker} />
          </MItem>
        ))}
      </MList>
    </PageHeader>
  );
}
