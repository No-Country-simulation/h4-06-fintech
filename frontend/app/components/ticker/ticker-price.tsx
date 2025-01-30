import { formatMoney } from '@/lib/money-formatter';

interface Props {
  price: number;
}

export function TickerPrice({ price }: Props) {
  return (
    <div className='rounded-lg border border-foreground px-4 py-2'>
      <p className='text-xl font-medium'>{formatMoney(price)}</p>
    </div>
  );
}
