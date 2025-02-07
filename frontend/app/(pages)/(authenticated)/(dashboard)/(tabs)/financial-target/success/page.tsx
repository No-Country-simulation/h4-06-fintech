import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CarIcon } from '../_components/car-icon';

export default function SuccessPage() {
  return (
    <section className='flex flex-col items-center gap-40'>
      <section className='flex flex-col items-center justify-center gap-6'>
        <CarIcon />
        <section className='flex flex-col items-center gap-2'>
          <p className='text-center text-3xl'>
            ¡Felicidades, definiste un nuevo objetivo por cumplir!
          </p>
          <p className='text-center text-3xl'>
            Para verlo en detalle ve a la sección Mis objetivos en el inicio
          </p>
        </section>
      </section>
      <footer>
        <Link href='/financial-target'>
          <Button
            variant='terciary'
            size='custom'
          >
            Inicio
          </Button>
        </Link>
      </footer>
    </section>
  );
}
