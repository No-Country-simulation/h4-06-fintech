import { Card } from '@/components/ui/card';
import { PropsWithChildren } from 'react';
import { IconCircle, IconCircleProps } from './icon-circle';

type Props = PropsWithChildren & IconCircleProps;

export function FinancialTargetCard({ children, icon, color }: Props) {
  return (
    <Card className='w-[320px] flex-row items-center bg-secondary'>
      <IconCircle
        icon={icon}
        color={color}
      />
      <section className='flex w-full flex-col items-center justify-center gap-2'>
        {children}
      </section>
    </Card>
  );
}
