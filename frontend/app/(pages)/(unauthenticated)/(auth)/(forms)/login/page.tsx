import { Text } from '@/components/ui/text';
import Link from 'next/link';
import LoginForm from './_components/login-form';

export default function IniciarSesionPage() {
  return (
    <section className='flex flex-col items-center gap-16 px-10 pt-12'>
      <header className='flex flex-col items-center justify-center gap-4'>
        <Text variant='header'>Iniciar sesión</Text>
        <p className='font-light'>
          ¿Aún no tienes una cuenta?{' '}
          <Link
            className='font-semibold'
            href={'/signup'}
          >
            Crear cuenta
          </Link>
        </p>
      </header>
      <LoginForm />
      <footer>
        <p className='font-light'>
          ¿Olvidaste tu contraseña?{' '}
          <strong className='font-medium'>Recuperar contraseña</strong>
        </p>
      </footer>
    </section>
  );
}
