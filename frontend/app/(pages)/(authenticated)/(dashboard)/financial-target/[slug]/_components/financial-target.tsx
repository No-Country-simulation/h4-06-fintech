/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
'use client';

import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { formatMoney } from '@/lib/money-formatter';
import { useEffect, useState } from 'react';
import { financialTargetApi } from '../../../../../../../api/backend/financial-target/financial-target.api';
import { type FinancialTarget } from '../../../../../../../api/backend/financial-target/interface/getOne';

interface Props {
  id: string;
}

export function FinancialTarget({ id }: Props) {
  const [target, setTarget] = useState<FinancialTarget | null>();

  useEffect(() => {
    financialTargetApi.getOne({ id }).then(setTarget);
  }, [id]);

  return (
    <section className='flex flex-col gap-12'>
      <header className='flex flex-col gap-4'>
        <Text variant='header'>Tu objectivo financiero</Text>
        <Text variant='small'>{target?.name}</Text>
      </header>
      <section className='grid grid-cols-2 gap-4'>
        <Card>
          <Text>Tu progreso</Text>
          <p>{formatMoney(target?.savedAmount!)}</p>
        </Card>
        <Card>
          <Text>Monto del objetivo</Text>
          <p>{formatMoney(target?.amount!)}</p>
        </Card>
      </section>
    </section>
  );
}
