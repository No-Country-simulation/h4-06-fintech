'use client';

import { signUpAction } from '@/actions/signup/signup-action';
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

export default function SignUpForm() {
  const [state, action, pending] = useActionState(signUpAction, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast.success(
        'Cuenta creada con éxito! 🎉\n Confirma la creacion de tu cuenta con el mail que te enviamos',
      );
      router.replace('/login');
    }

    if (state.actionErrorMessage) {
      toast.error(state.actionErrorMessage);
    }
  }, [state, router]);

  return (
    <form
      action={action}
      className='flex w-full flex-col gap-4'
    >
      <Input
        data-pw='email'
        label='Email'
        name='email'
        error={state.message?.email?.[0]}
        placeholder='Ejemplo.iUPi@gmail.com'
      />
      <Input
        data-pw='password'
        label='Contraseña'
        name='password'
        password
        error={state.message?.password?.[0]}
        placeholder='Debe contener al menos 8 caracteres'
      />
      <SubmitButton
        data-pw='submit-button'
        id='signup-button'
        label='Crear cuenta'
        className='mx-auto mt-10'
        pending={pending}
      />
    </form>
  );
}
