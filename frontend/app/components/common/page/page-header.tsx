import { Text } from '@/components/ui/text';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
  subtitle?: string;
}

export function PageHeader({ children, title, subtitle }: Props) {
  return (
    <section className='flex flex-col gap-12 md:gap-20'>
      <header className='flex flex-col gap-4'>
        <Text variant='header'>{title}</Text>
        {subtitle && <p className='prose max-w-[900px]'>{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
