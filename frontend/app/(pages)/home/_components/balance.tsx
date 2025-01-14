import { Card } from '@/components/ui/card';
import { moneyFormatter } from '@/lib/money-formatter';
import { EyeIcon } from 'lucide-react';

export async function Balance() {
  await new Promise((resolve) => setTimeout(() => resolve(true), 1000));

  const totalBalance = 912180;

  return (
    <Card className='balance flex flex-col justify-between bg-blue-600 text-blue-200'>
      <p className='text-sm font-bold'>Total balance</p>
      <footer className='flex items-center gap-2'>
        <label
          className='cursor-pointer'
          htmlFor='view-money'
        >
          <EyeIcon className='hover:text-blue-50' />
        </label>
        <input
          className='peer/view'
          id='view-money'
          type='checkbox'
          hidden
        />
        <p className='hidden text-3xl peer-checked/view:block lg:text-5xl'>
          {moneyFormatter.format(totalBalance)}
        </p>
        <p className='visible text-3xl peer-checked/view:hidden lg:text-5xl'>
          $***.**
        </p>
      </footer>
    </Card>
  );
}
