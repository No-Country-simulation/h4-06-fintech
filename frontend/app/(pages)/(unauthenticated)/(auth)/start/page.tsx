import { AuthProviderButton } from '@/components/button/auth-provider-button';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function StartPage() {
  return (
    <section className='mx-auto md:grid md:max-w-screen-xl md:grid-cols-2 gap-20 px-8 py-20'>
      <section className='flex flex-col justify-center items-center gap-8 md:justify-between'>
        <h2 className='text-pretty text-center py-16 font-poppins-semibold text-3xl font-semibold leading-10'>

          Conoce tu perfil financiero único y ¡Alcanzá tus objetivos con iUPi!
        </h2>
        <section className='flex flex-col items-center justify-center gap-2'>
          <section className='flex w-full max-w-[300px]  flex-col gap-10 md:max-w-full'>
            <AuthProviderButton provider='Google' />
            <AuthProviderButton provider='Apple' />
          </section>
          <span className='text-2xl font-light'>o</span>
          <Link
            href='/signup'
            className='w-full'
          >
            <Button
              variant='secondary'
              size='full'
              className='w-full max-w-[300px] md:max-w-full text-lg md:text-2xl'
            >
              Continuar con email
            </Button>
          </Link>
        </section>
        <footer className='flex flex-col items-center justify-center gap-14'>
          <p>
            ¿Ya tienes una cuenta?{' '}
            <Link
              className='font-bold'
              href='/login'
            >
              Iniciar sesión
            </Link>
          </p>
          <p className='max-w-[450px] text-center'>
            Al ingresar acepto los Términos y Condiciones y Políticas de
            Privacidad de iUPi.
          </p>
        </footer>
      </section>
      <section className='hidden md:relative md:overflow-hidden md:rounded-xl md:block'>
        <Image
          fill
          className='object-cover'
          src='/images/auth.webp'
          alt='Auth image'
        />
      </section>
    </section>
  );
}
