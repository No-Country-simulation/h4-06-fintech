'use client';

import { Text } from '@/components/ui/text';
import { getFinancialTargetById } from '@/lib/local-financial-targets';
import { useRouter } from 'next/navigation';

interface Props {
  id: string;
}

export function FinancialTarget({ id }: Props) {
  const router = useRouter();
  const target = getFinancialTargetById(id);

  // Si no se encontro un objetivo por id se redirige a la home
  if (!target) {
    router.replace('/home');
    return;
  }

  return (
    <section className='flex flex-col gap-12'>
      <header className='flex flex-col gap-4'>
        <Text variant='title'>Tu objectivo financiero</Text>
        <Text variant='detail'>{target?.name}</Text>
      </header>
    </section>
  );
}
