'use client';

import { Text } from '@/components/ui/text';
import { usePathname } from 'next/navigation';

const pathsThatNeedHeader = [
  '/financial-target',
  '/financial-target/create',
  '/financial-target/success',
];

export function LayoutHeader({}) {
  const pathname = usePathname();

  if (!pathsThatNeedHeader.some((p) => pathname === p)) {
    return null;
  }

  return (
    <header className='flex flex-col gap-4'>
      <Text variant='header'>Mis objetivos</Text>
    </header>
  );
}
