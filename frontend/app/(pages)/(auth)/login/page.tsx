import { AuthProviderButton } from '@/components/button/auth-provider-button';
import Link from 'next/link';
import LoginForm from './_components/login';

export default function IniciarSesionPage() {
  return (
    <section className='flex flex-col gap-4 rounded-md bg-secondary p-6 shadow-lg'>
      <h1>Iniciar Sesión</h1>
      <section className='flex flex-col gap-4'>
        <LoginForm />
        <footer className='flex flex-col gap-1 border-t pt-4'>
          <AuthProviderButton provider='Google' />
          <AuthProviderButton provider='Apple' />
        </footer>
      </section>
      <footer className='flex justify-center'>
        <p>
          Aún no tenes una cuenta?{' '}
          <Link
            className='underline'
            href={'/signup'}
          >
            Haz click aqui!
          </Link>
        </p>
      </footer>
    </section>
  );
}
