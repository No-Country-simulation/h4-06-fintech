'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function CreateTargetButton() {
  const path = usePathname();

  if (path === '/financial-target/create') {
    return null;
  }

  return (
    <Link
      href='/financial-target/create'
      className='absolute bottom-0 right-0 z-[9999]'
    >
      <Button
        variant='secondary'
        size='full'
      >
        Crear nuevo objetivo
      </Button>
    </Link>
  );
}
