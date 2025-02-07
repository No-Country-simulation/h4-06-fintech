import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<'section'> {
  title: string;
  subtitle?: string;
}

export function PageHeader({
  children,
  title,
  subtitle,
  className,
  ...props
}: Props) {
  return (
    <section
      className={cn('flex flex-col gap-12 md:gap-20', className)}
      {...props}
    >
      <header className='flex flex-col gap-4'>
        <Text variant='header'>{title}</Text>
        {subtitle && <p className='prose max-w-[900px]'>{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
