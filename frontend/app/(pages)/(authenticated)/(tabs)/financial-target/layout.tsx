import { Text } from '@/components/ui/text';
import { PropsWithChildren } from 'react';

export default function layout({ children }: PropsWithChildren) {
  return (
    <section className='flex flex-col gap-12'>
      <header className='flex flex-col gap-4'>
        <Text variant='header'>Mis objetivos</Text>
      </header>
      {children}
    </section>
  );
}
