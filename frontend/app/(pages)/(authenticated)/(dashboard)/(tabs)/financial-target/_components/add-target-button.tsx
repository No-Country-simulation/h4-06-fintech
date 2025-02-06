import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AddTargetButton() {
  return (
    <Link
      href='/financial-target/create'
      className='absolute bottom-0 right-0'
    >
      <Button
        variant='secondary'
        size='custom'
      >
        Añadir nuevo objetivo
      </Button>
    </Link>
  );
}
