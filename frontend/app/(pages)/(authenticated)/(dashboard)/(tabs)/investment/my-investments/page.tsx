import { PageHeader } from '@/components/common/page/page-header';
import { backend } from '@api';
import { MyInvestmentItem } from './_components/my-investment-item';
import { MItem } from '@/components/motion/motion-item';
import { MList } from '@/components/motion/motion-list';
import { EmptySection } from '@/components/ui/empty-section';

export default async function MyInvestmentsPage() {
  const { investmentPortfolio } = await backend.authApi.getProfile();
  const { investments } = await backend.investment.portfolioApi.get({
    id: investmentPortfolio.id,
  });

  console.log({ investments });

  const tickers = (await backend.investment.stockApi.getTickers())
    .map((ticker) => {
      const matchingInvestment = investments.find(
        (investment) => investment.stockSymbol === ticker.symbol,
      );
      return matchingInvestment
        ? { ...ticker, investmentId: matchingInvestment.id }
        : null;
    })
    .filter(Boolean);

  return (
    <PageHeader title='Mis inversiones'>
      {tickers.length ? (
        <MList className='flex flex-col gap-3'>
          {tickers.map((ticker) => (
            <MItem key={ticker!.symbol}>
              <MyInvestmentItem ticker={ticker!} />
            </MItem>
          ))}
        </MList>
      ) : (
        <EmptySection
          icon='/svg/acciones.svg'
          header='No tenes ninguna inversión por el momento'
          subtitle=''
        />
      )}
    </PageHeader>
  );
}
