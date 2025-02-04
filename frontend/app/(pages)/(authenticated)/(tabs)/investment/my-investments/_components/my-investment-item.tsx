import { Ticker } from '@/components/ticker/ticker';
import { getPriceInfo } from '@/lib/get-price-info';
import { Ticker as TickerType } from 'client-api/backend/modules/investment/stock/interface/getTickers';
import Link from 'next/link';

interface Props {
  ticker: TickerType;
}

export function MyInvestmentItem({ ticker }: Props) {
  const { changePercent, isUp } = getPriceInfo({ current: ticker.price.current, previousClose: ticker.price.previousClose })

  return (
    <Ticker.Root
      key={ticker.symbol}
      image={ticker.image}
      name={ticker.companyName}
      symbol={ticker.symbol}
      isUp={isUp}
    >
      <Ticker.Content>
        <Ticker.Price
          changePercentage={changePercent}
          price={ticker.price.current}
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
