import { formatMoney } from '@/lib/money-formatter';
import { Ticker } from 'client-api/backend/modules/investment/stock/interface/getTickers';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  ticker: Ticker;
}

export function TickerItem({ ticker }: Props) {
  const changeAmount = (
    ticker.price.current - ticker.price.previousClose
  ).toFixed(2);

  const changePercent = (
    (Number(changeAmount) / ticker.price.previousClose) *
    100
  ).toFixed(2);

  const isUp = ticker.price.current > ticker.price.previousClose;

  return (
    <Link
      className='flex items-center justify-between rounded-md bg-primary/10 p-2 transition-colors hover:bg-primary/10'
      key={ticker.symbol}
      href={`/investment/stock/${ticker.symbol}`}
    >
      <section className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{ticker.companyName}</p>
        <Image
          alt='stock evolution'
          src={isUp ? '/svg/is-up.svg' : '/svg/is-down.svg'}
          height={24}
          width={24}
        />
      </section>
      <section className='flex items-center gap-9'>
        <div className='rounded-lg border border-foreground px-4 py-2'>
          <p className='text-xl font-medium'>
            {formatMoney(ticker.price.current)}
          </p>
        </div>
        <div
          data-isup={isUp}
          className='flex items-center gap-2 rounded-lg border border-foreground border-red-600 bg-red-200 px-4 py-2 text-red-600 data-[isup=true]:border-green-700 data-[isup=true]:bg-green-200 data-[isup=true]:text-green-700'
        >
          <p className='text-xl font-medium'>
            {isUp && '+'}
            {formatMoney(changeAmount)}
          </p>
          <p className='text-xl font-medium'>({changePercent})%</p>
        </div>
      </section>
    </Link>
  );
}
