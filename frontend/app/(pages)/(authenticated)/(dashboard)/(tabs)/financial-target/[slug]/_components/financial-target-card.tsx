import { Card } from '@/components/ui/card';
import { PropsWithChildren } from 'react';
import { IconCircle, IconCircleProps } from './icon-circle';

type Props = PropsWithChildren & IconCircleProps;

export function FinancialTargetCard({ children, icon, color }: Props) {
  return (
    <Card className='h-[120px] w-full max-w-[320px] flex-row items-center bg-secondary transition-colors group-hover:bg-secondary/50'>
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
