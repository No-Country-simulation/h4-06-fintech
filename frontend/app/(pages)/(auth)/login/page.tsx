import { AuthProviderButton } from '@/components/button/auth-provider-button';
import Link from 'next/link';
import {
  AuthCard,
  AuthCardFooter,
  AuthCardHeader,
} from '../_components/auth-card';
import LoginForm from './_components/login';

export default function IniciarSesionPage() {
  return (
    <AuthCard>
      <AuthCardHeader>Iniciar Sesión</AuthCardHeader>
      <section className='flex flex-col gap-4'>
        <LoginForm />
        <footer className='flex flex-col gap-1 border-t pt-4'>
          <AuthProviderButton provider='Google' />
          <AuthProviderButton provider='Apple' />
        </footer>
      </section>
      <AuthCardFooter>
        Aún no tenes una cuenta?{' '}
        <Link
          className='underline'
          href={'/signup'}
        >
          Haz click aqui!
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
}
