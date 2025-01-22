'use client';

import { Text } from '@/components/ui/text';
import { getFinancialTargetById } from '@/lib/local-financial-targets';

interface Props {
  id: string;
}

export function FinancialTarget({ id }: Props) {
  const target = getFinancialTargetById(id);

  return (
    <section className='flex flex-col gap-12'>
      <header className='flex flex-col gap-4'>
        <Text variant='title'>Tu objectivo financiero</Text>
        <Text variant='detail'>{target?.name}</Text>
      </header>
    </section>
  );
}
