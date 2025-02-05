import { MItem } from '@/components/motion/motion-item';
import { MList } from '@/components/motion/motion-list';
import { MyInvestmentItem } from './my-investment-item';
import { EmptySection } from '@/components/ui/empty-section';
import { backend } from '@api';

export async function MyInvestmentList() {
  // await new Promise((resolve) => setTimeout(() => resolve(true), 10000));

  const { investmentPortfolio } = await backend.authApi.getProfile();
  const { investments } = await backend.investment.portfolioApi.get({
    id: investmentPortfolio.id,
  });

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

  if (!tickers.length) {
    return (
      <EmptySection
        icon='/svg/acciones.svg'
        header='No tenes ninguna inversión por el momento'
        subtitle=''
      />
    );
  }

  return (
    <MList className='flex flex-col gap-3'>
      {tickers.map((ticker) => (
        <MItem key={ticker!.symbol}>
          <MyInvestmentItem ticker={ticker!} />
        </MItem>
      ))}
    </MList>
  );
}
