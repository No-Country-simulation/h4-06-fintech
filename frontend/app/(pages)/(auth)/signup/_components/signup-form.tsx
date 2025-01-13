'use client';

import { signUpAction } from '@/actions/signup/signup-action';
import SubmitButton from '@/components/button/submit-button';
import Input from '@/components/input/input';
import { useActionState } from 'react';

const initialState = {
  message: {
    email: [],
    password: [],
    confirmPassword: [],
  },
  success: false,
};

export default function SignUpForm() {
  const [state, action, pending] = useActionState(signUpAction, initialState);

  return (
    <div className='flex flex-col gap-4'>
      <form
        action={action}
        className='flex flex-col gap-4'
      >
        <Input
          label='Correo'
          name='email'
          error={state.message?.email?.[0]}
          placeholder='correo@correo.com'
        />
        <Input
          label='Contraseña'
          name='password'
          type='password'
          error={state.message?.password?.[0]}
          placeholder='********'
        />
        <Input
          label='Confirmar contraseña'
          name='confirmarPassword'
          type='password'
          error={state.message?.password?.[0]}
          placeholder='********'
        />
        <SubmitButton
          label='Crear cuenta'
          pending={pending}
        />
      </form>
    </div>
  );
}
