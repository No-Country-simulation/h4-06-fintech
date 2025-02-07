import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className='h-[50dvh] border-b'>
      <section className='mx-auto h-full max-w-screen-xl p-6'>
        <section className='grid h-full grid-cols-1 gap-6 md:grid-cols-2'>
          <section className='flex flex-col justify-center gap-2 order-1 md:order-none'>
            <h1 className='text-lg font-semibold'>Bienvenido a iUPi!</h1>
            <p>
              Con iUPi, podrás tomar el control de tus finanzas, alcanzar
              objetivos y descubrir un nuevo mundo de posibilidades financieras.
            </p>
            <Link
              href={'/start'}
              className='w-fit'
            >
              <Button>Empezar ahora</Button>
            </Link>
          </section>
          <section className='flex flex-1 order-2 md:order-none h-[300px] md:h-full'>
            <figure className='relative h-full w-full'>
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
    </section>
  );
}
