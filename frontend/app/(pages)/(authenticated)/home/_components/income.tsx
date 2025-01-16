import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { moneyFormatter } from '@/lib/money-formatter';

const recentIncome = {
  user: 'Jhon Doe',
  createdAt: new Date(),
  amount: 313131,
};

export async function Income() {
  await new Promise((resolve) => setTimeout(() => resolve(true), 1000));

  return (
    <Card className='income gap-6'>
      <Text variant={'detail'}>Income</Text>
      <ul className='flex h-full flex-col gap-4'>
        {Array(3)
          .fill(1)
          .map((n, index) => (
            <IncomeItem
              key={index}
              createdAt={recentIncome.createdAt.toDateString()}
              amount={recentIncome.amount}
              user={recentIncome.user}
            />
          ))}
      </ul>
    </Card>
  );
}

interface IncomeItemProps {
  amount: number;
  createdAt: string;
  user: string;
}

export function IncomeItem({ amount, createdAt, user }: IncomeItemProps) {
  return (
    <li className='flex items-center justify-between gap-2'>
      <div className='aspect-square h-full rounded-lg bg-blue-600'></div>
      <section className='flex flex-1 flex-col gap-2'>
        <Text>{user}</Text>
        <Text variant={'small'}>{createdAt}</Text>
      </section>
      <Text variant={'detail'}>+{moneyFormatter.format(amount)}</Text>
    </li>
  );
}
