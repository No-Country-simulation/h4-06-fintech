import { formatMoney } from '@/lib/money-formatter';

interface Props {
  isUp?: boolean;
  evolutionPercent: string;
  evolutionAmount: string;
}

export function TickerEvolution({
  evolutionAmount,
  evolutionPercent,
  isUp = false,
}: Props) {
  return (
    <div
      data-isup={isUp}
      className='flex items-center gap-2 rounded-lg border border-foreground border-red-600 bg-red-200 px-4 py-2 text-red-600 data-[isup=true]:border-green-700 data-[isup=true]:bg-green-200 data-[isup=true]:text-green-700'
    >
      <p className='text-xl font-medium'>
        {isUp && '+'}
        {formatMoney(evolutionAmount)}
      </p>
      <p className='text-xl font-medium'>({evolutionPercent})%</p>
    </div>
  );
}
