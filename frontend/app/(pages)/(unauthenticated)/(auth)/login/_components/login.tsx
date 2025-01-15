'use client';
import { loginAction } from '@/actions/login/login-action';
import SubmitButton from '@/components/button/submit-button';
import Input from '@/components/input/input';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const initialState = {
  message: {
    email: [],
    password: [],
  },
  success: false,
  actionErrorMessage: '',
};

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, initialState);
  const router = useRouter();

  // TODO - ver si se puede evitar hacer uso de useEffect para
  // Mostrar el toast cuando se inicia sesion correctamente
  useEffect(() => {
    if (state.success) {
      toast('Sesion iniciada correctamente');
      // TODO - redirigir a la ruta del dashboard (CU-002)
      router.replace('/');
    }

    if (state.actionErrorMessage) {
      toast.error(state.actionErrorMessage);
    }
  }, [state, router]);

  return (
    <div className='flex flex-col gap-4'>
      <form
        action={action}
        className='flex flex-col gap-4'
      >
        <Input
          data-pw='email'
          label='Correo'
          name='email'
          error={state.message?.email?.[0]}
          placeholder='correo@correo.com'
        />
        <Input
          data-pw='password'
          label='Contraseña'
          name='password'
          type='password'
          error={state.message?.password?.[0]}
          placeholder='********'
        />
        <SubmitButton
          data-pw='submit-button'
          label='Iniciar sesión'
          pending={pending}
        />
      </form>
    </div>
  );
}
