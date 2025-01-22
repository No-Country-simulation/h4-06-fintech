'use client';

import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { getFinancialTargets } from '@/lib/local-financial-targets';

export function Targets() {
  return (
    <Card className='graph'>
      <Text variant='detail'>Objetivos Financieros</Text>
      <ul className='flex flex-col gap-1'>
        {getFinancialTargets().map((target, index) => (
          <li
            className='rounded-lg border border-border bg-background p-2 text-sm'
            key={index}
          >
            {target.name}
          </li>
        ))}
      </ul>
    </Card>
  );
}
