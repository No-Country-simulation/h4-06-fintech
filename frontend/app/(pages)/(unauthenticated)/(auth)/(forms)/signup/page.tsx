import { Text } from '@/components/ui/text';
import Link from 'next/link';
import SignUpForm from './_components/signup-form';

export default function RegisterPage() {
  return (
    <section className='flex flex-col items-center gap-16 px-10 pt-12'>
      <header className='flex flex-col items-center justify-center gap-4'>
        <Text variant='header'>Crear cuenta</Text>
        <p className='font-light'>
          ¿Ya tenes una cuenta?{' '}
          <Link
            className='font-semibold'
            href={'/login'}
          >
            Haz click aqui!
          </Link>
        </p>
      </header>
      <SignUpForm />
    </section>
  );
}
