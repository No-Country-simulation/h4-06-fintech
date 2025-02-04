import { PageHeader } from '@/components/common/page/page-header';
import { backend } from '@api';
import { MyInvestmentItem } from './_components/my-investment-item';

export default async function MyInvestmentsPage() {
  const tickers = await (
    await backend.investment.stockApi.getTickers()
  ).slice(0, 5);

  return (
    <PageHeader title='Mis inversiones'>
      <section className='flex flex-col gap-3'>
        {tickers.map((ticker) => (
          <MyInvestmentItem
            ticker={ticker}
            key={ticker.symbol}
          />
        ))}
      </section>
    </PageHeader>
  );
}
