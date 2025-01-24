import { Text } from '@/components/ui/text';
import Image from 'next/image';
import Link from 'next/link';
import SignUpForm from './_components/signup-form';

export default function RegisterPage() {
  return (
    <section className='relative flex flex-col items-center gap-16 px-10 pt-12'>
      <Link
        className='absolute right-0 top-0 m-10 rounded-full p-1 shadow-md shadow-foreground/50 transition-colors hover:bg-secondary'
        href='/start'
      >
        <Image
          src='/svg/close-icon.svg'
          alt='Close icon'
          height={20}
          width={20}
        />
      </Link>
      <header className='flex flex-col items-center justify-center gap-4'>
        <Text variant='header'>Crear cuenta</Text>
        <p className='font-light'>
          ¿Ya tenes una cuenta?{' '}
          <Link
            className='font-semibold'
            href={'/login'}
          >
            Iniciar sesión
          </Link>
        </p>
      </header>
      <SignUpForm />
    </section>
  );
}
