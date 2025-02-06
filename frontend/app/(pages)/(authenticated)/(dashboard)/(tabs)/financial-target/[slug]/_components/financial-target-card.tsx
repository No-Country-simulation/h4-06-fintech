import { Card, CardProps } from '@/components/ui/card';
import { IconCircle, IconCircleProps } from './icon-circle';
import { cn } from '@/lib/utils';

type Props = CardProps & IconCircleProps;

export function FinancialTargetCard({
  children,
  icon,
  color,
  className,
  ...props
}: Props) {
  return (
    <Card
      className={cn(
        'h-[120px] w-full flex-row items-center bg-secondary transition-colors group-hover:bg-secondary/50 md:max-w-[320px]',
        className,
      )}
      {...props}
    >
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
