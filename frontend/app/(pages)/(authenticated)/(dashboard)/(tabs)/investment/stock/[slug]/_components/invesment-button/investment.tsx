'use client';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { InvestmentIcon } from './svg/invesment';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function InvestmentButton() {
  const path = usePathname();
  const id = path.split('/')[3];

  return (
    <Link
      href={`/investment/stock/${id}/invest`}
      className='w-full max-w-[218px]'
    >
      <Button
        type='button'
        className='h-[43px] w-full max-w-[218px] rounded-lg bg-[#E9EDF6] focus:bg-[#004AAD33]'
      >
        <span className='flex flex-row items-center justify-center gap-2'>
          <InvestmentIcon />
          <Text>Invertir</Text>
        </span>
      </Button>
    </Link>
  );
}
