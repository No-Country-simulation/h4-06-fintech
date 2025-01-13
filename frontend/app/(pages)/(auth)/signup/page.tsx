import Link from 'next/link';
import {
  AuthCard,
  AuthCardFooter,
  AuthCardHeader,
} from '../_components/auth-card';
import SignUpForm from './_components/signup-form';

export default function RegisterPage() {
  return (
    <AuthCard>
      <AuthCardHeader>Crear nueva cuenta</AuthCardHeader>
      <SignUpForm />
      <AuthCardFooter>
        Ya tenes una cuenta?{' '}
        <Link
          className='underline'
          href={'/login'}
        >
          Haz click aqui!
        </Link>
      </AuthCardFooter>
    </AuthCard>
  );
}
