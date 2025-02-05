import { formatMoney } from '@/lib/money-formatter';

interface Props {
  isUp?: boolean;
  evolutionAmount: string;
}

export function TickerEvolution({ evolutionAmount, isUp = false }: Props) {
  return (
    <div
      data-isup={isUp}
      className='hidden items-center gap-2 rounded-lg border-red-600 text-red-600 group-data-[isup=true]:border-green-700 group-data-[isup=true]:text-green-700 sm:flex'
    >
      <p className='text-xl font-medium'>
        {isUp && '+'}
        {formatMoney(evolutionAmount)}
      </p>
    </div>
  );
}
