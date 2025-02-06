import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CarIcon } from './car-icon';
import { PlusCircleIcon } from 'lucide-react';

export function TargetsEmpty() {
  return (
    <section className='flex flex-col items-center gap-40'>
      <section className='flex flex-col items-center justify-center gap-6'>
        <CarIcon />
        <section className='flex flex-col items-center gap-2'>
          <p className='text-center text-3xl'>
            Tu lista de objetivos está vacía.
          </p>
          <p className='text-center font-light'>
            Haz clic en{' '}
            <span className='font-normal italic'>Añadir nuevo objetivo</span> y
            ¡Comienza a alcanzar tus metas!
          </p>
        </section>
      </section>
      <footer>
        <Link href='/financial-target/create'>
          <Button
            variant='terciary'
            className='rounded-lg'
          >
            <PlusCircleIcon />
            Añadir nuevo objetivo
          </Button>
        </Link>
      </footer>
    </section>
  );
}
