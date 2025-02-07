import { formatMoney } from '@/lib/money-formatter';
import Image from 'next/image';

interface Props {
  price: number;
  changePercentage: string;
}

export function TickerPrice({ price, changePercentage }: Props) {
  return (
    <div className='flex items-center gap-1'>
      <p className='text-xl font-medium'>{formatMoney(price)}</p>
      <section className='flex items-center gap-1'>
        <Image alt='evolution svg icon' src="/svg/is-down-arrow.svg" width={14} height={14} className='group-data-[isup=true]:hidden block' />
        <Image alt='evolution svg icon' src="/svg/is-up-arrow.svg" width={14} height={14} className='group-data-[isup=true]:block hidden' />
        <p className='text-xs group-data-[isup=true]:text-green-600 text-red-600'>{changePercentage}%</p>
      </section>
    </div>
  );
}
