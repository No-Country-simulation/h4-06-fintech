'use client';

import { Text } from '@/components/ui/text';
import { usePathname } from 'next/navigation';

export function LayoutHeader({}) {
  const pathname = usePathname();

  if (pathname.includes('/recommendation')) {
    return null;
  }

  return (
    <header className='flex flex-col gap-4'>
      <Text variant='header'>Mis objetivos</Text>
    </header>
  );
}
