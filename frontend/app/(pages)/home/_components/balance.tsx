import { Card } from '@/components/ui/card';
import { moneyFormatter } from '@/lib/money-formatter';

export async function Balance() {
  await new Promise((resolve) => setTimeout(() => resolve(true), 1000));

  const totalBalance = 912180;

  return (
    <Card className='balance flex flex-col justify-between bg-blue-600 text-blue-200'>
      <p className='text-sm font-bold'>Total balance</p>
      <p className='text-5xl'>{moneyFormatter.format(totalBalance)}</p>
    </Card>
  );
}
