'use client';

import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { getFinancialTargets } from '@/lib/local-financial-targets';
import Link from 'next/link';

export function Targets() {
  return (
    <Card className='graph'>
      <Text variant='detail'>Objetivos Financieros</Text>
      <ul className='flex flex-col gap-1'>
        {getFinancialTargets().map((target, index) => (
          <Link
            href={`/financial-target/${target.id}`}
            key={index}
          >
            <li className='rounded-lg border border-border bg-background p-2 text-sm'>
              {target.name}
            </li>
          </Link>
        ))}
      </ul>
    </Card>
  );
}
