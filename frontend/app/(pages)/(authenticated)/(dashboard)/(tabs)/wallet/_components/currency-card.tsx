'use client';

import { Card } from '@/components/ui/card';
import { formatMoney } from '@/lib/money-formatter';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  type: 'USD' | 'ARS';
  amount: number;
}

export function CurrencyCard({ amount, type }: Props) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Card
      variant='secondary'
      className='flex flex-col gap-4'
    >
      <p className='text-lg'>Tu dinero {type}</p>
      <section
        data-visible={visible}
        className='group flex justify-between'
      >
        <p className='hidden text-xl font-semibold group-data-[visible=true]:block'>
          {formatMoney(amount)}
        </p>
        <p className='text-xl font-semibold group-data-[visible=true]:hidden'>
          $*****
        </p>
        <button onClick={() => setVisible(!visible)}>
          <Image
            alt='eye icon'
            src={
              visible ? '/svg/eye-open-icon.svg' : '/svg/eye-closed-icon.svg'
            }
            width={24}
            height={24}
          />
        </button>
      </section>
    </Card>
  );
}
