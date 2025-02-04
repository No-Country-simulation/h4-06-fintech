import { Ticker } from '@/components/ticker/ticker';
import { Ticker as TickerType } from 'client-api/backend/modules/investment/stock/interface/getTickers';
import Link from 'next/link';

interface Props {
  ticker: TickerType;
}

export function MyInvestmentItem({ ticker }: Props) {
  const changeAmount = (
    ticker.price.current - ticker.price.previousClose
  ).toFixed(2);

  const changePercent = (
    (Number(changeAmount) / ticker.price.previousClose) *
    100
  ).toFixed(2);

  const isUp = ticker.price.current > ticker.price.previousClose;

  return (
    <Ticker.Root
      key={ticker.symbol}
      image={ticker.image}
      name={ticker.companyName}
      symbol={ticker.symbol}
      isUp={isUp}
    >
      <Ticker.Content>
        <Ticker.Evolution
          evolutionAmount={changeAmount}
          evolutionPercent={changePercent}
          isUp={isUp}
        />
        <Link
          className='rounded-md bg-secondary/50 px-10 py-2 text-center font-medium transition-colors hover:bg-secondary'
          href={`/investment/my-investments/${ticker.symbol}`}
        >
          Ver
        </Link>
      </Ticker.Content>
    </Ticker.Root>
  );
}
