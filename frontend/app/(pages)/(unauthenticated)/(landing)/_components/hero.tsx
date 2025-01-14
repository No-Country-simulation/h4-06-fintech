import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className='h-[50dvh] border-b'>
      <section className='mx-auto grid h-full max-w-screen-xl grid-cols-2 gap-2 p-6'>
        <section className='flex flex-col justify-center gap-2'>
          <h1 className='text-lg font-semibold'>Bienvenido a iUPi!</h1>
          <p>
            Con iUPi, podrás tomar el control de tus finanzas, alcanzar
            objetivos y descubrir un nuevo mundo de posibilidades financieras.
          </p>
          <Link
            href={'/signup'}
            className='w-fit'
          >
            <Button>Empezar ahora</Button>
          </Link>
        </section>
        <section className='flex-1'>
          <figure className='relative h-full'>
            <Image
              alt='hero image'
              src='/images/human.png'
              className='h-full w-full object-contain'
              fill
            />
          </figure>
        </section>
      </section>
    </section>
  );
}
