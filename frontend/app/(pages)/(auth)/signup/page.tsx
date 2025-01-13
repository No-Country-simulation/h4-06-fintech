import Link from 'next/link';
import SignUpForm from './_components/signup-form';

export default function RegisterPage() {
  return (
    <section className='flex flex-col gap-4 rounded-md bg-secondary p-6 shadow-lg'>
      <h1>Crear nueva cuenta</h1>
      <SignUpForm />
      <footer className='flex justify-center'>
        <p>
          Ya tenes una cuenta?{' '}
          <Link
            className='underline'
            href={'/login'}
          >
            Haz click aqui!
          </Link>
        </p>
      </footer>
    </section>
  );
}
