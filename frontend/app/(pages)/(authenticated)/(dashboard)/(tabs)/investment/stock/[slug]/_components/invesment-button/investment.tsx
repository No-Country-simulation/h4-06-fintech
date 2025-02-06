'use client';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function InvestmentButton() {
  const path = usePathname();
  const id = path.split('/')[3];

  return (
    <Link href={`/investment/stock/${id}/invest`}>
      <Button
        type='button'
        className='w-full rounded-lg bg-primary/10 px-8 py-5 focus:bg-[#004AAD33]'
      >
        <Image
          alt='Invest icon'
          src='/svg/invest.svg'
          width={24}
          height={24}
        />
        <Text className='text-primary'>Invertir</Text>
      </Button>
    </Link>
  );
}
