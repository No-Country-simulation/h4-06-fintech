import { Ticker } from '@/components/ticker/ticker';
import { getPriceInfo } from '@/lib/get-price-info';
import { type Ticker as TickerType } from 'client-api/backend/modules/investment/stock/interface/getTickers';
import Link from 'next/link';

interface Props {
  ticker: TickerType;
}

export function TickerItem({ ticker }: Props) {
  const { changeAmount, changePercent, isUp } = getPriceInfo({ current: ticker.price.current, previousClose: ticker.price.previousClose })

  return (
    <Link href={`/investment/stock/${ticker.symbol}`}>
      <Ticker.Root image={ticker.image} name={ticker.companyName} symbol={ticker.symbol} isUp={isUp}>
        <Ticker.Content>
          <Ticker.Price price={ticker.price.current} changePercentage={changePercent} />
          <Ticker.Evolution evolutionAmount={changeAmount} />
        </Ticker.Content>
      </Ticker.Root>
    </Link>
  );
}