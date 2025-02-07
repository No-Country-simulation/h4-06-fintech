import { Card } from '@/components/ui/card';
import { formatMoney } from '@/lib/money-formatter';

interface Props {
  meses: number;
  amount: number;
}

export function RecommendationCard({ meses, amount }: Props) {
  const amountPerMonth = amount / meses;

  return (
    <Card className='max-w-[320px] items-center gap-8 bg-primary/40 py-12'>
      <p className='text-3xl font-bold text-primary'>{meses} MESES</p>
      <p className='text-xl font-medium'>Ingresa</p>
      <p className='text-3xl font-bold text-primary'>
        {formatMoney(amountPerMonth)}
      </p>
      <p className='max-w-[270px] text-center font-medium'>
        Todos los meses y logra tu objetivo en {meses} meses
      </p>
    </Card>
  );
}
