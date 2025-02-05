import { Button } from '@/components/ui/button';
import { CarIcon } from '../financial-target/_components/car-icon';
import Link from 'next/link';

export default function InvestSuccessPage() {
  return (
    <section className='flex flex-col items-center gap-40'>
      <section className='flex flex-col items-center justify-center gap-6'>
        <CarIcon />
        <section className='flex flex-col items-center gap-2'>
          <p className='text-center text-3xl'>
            ¡Felicidades, inversion registrada con éxito!
          </p>
          <p className='text-center text-3xl'>
            Podes ver como evoluciona tu evolucion haciendo click en el boton{' '}
            <strong>Mis inversiones</strong>
          </p>
        </section>
      </section>
      <footer>
        <Link href='/investment/my-investments'>
          <Button
            variant='outline'
            size='custom'
          >
            Mis inversiones
          </Button>
        </Link>
      </footer>
    </section>
  );
}
