import { Text } from '@/components/ui/text';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
  subtitle?: string;
}

export function PageHeader({ children, title, subtitle }: Props) {
  return (
    <section className='flex flex-col gap-20'>
      <header className='flex flex-col gap-4'>
        <Text variant='header'>{title}</Text>
        {subtitle && <Text className='max-w-[900px]'>{subtitle}</Text>}
      </header>
      {children}
    </section>
  );
}
