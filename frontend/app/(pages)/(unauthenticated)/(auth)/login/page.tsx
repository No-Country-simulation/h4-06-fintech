import Link from 'next/link';
import {
  AuthCard,
  AuthCardFooter,
  AuthCardHeader,
} from '../_components/auth-card';
import { AuthProvidersSection } from '../_components/auth-providers-section';
import LoginForm from './_components/login';

export default function IniciarSesionPage() {
  return (
    <AuthCard>
      <AuthCardHeader>Iniciar Sesión</AuthCardHeader>
      <AuthProvidersSection>
        <LoginForm />
      </AuthProvidersSection>
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
