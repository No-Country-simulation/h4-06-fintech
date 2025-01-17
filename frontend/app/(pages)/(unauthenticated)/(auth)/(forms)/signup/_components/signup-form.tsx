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
    confirmPassword: [],
  },
  success: false,
  actionErrorMessage: '',
};

export default function SignUpForm() {
  const [state, action, pending] = useActionState(signUpAction, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast.success('Cuenta creada con éxito! 🎉');
      router.replace('/onboarding');
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
      <Input
        data-pw='confirm-password'
        label='Confirmar contraseña'
        name='confirmPassword'
        type='password'
        error={state.message?.confirmPassword?.[0]}
        placeholder='********'
      />
      <SubmitButton
        data-pw='submit-button'
        id='signup-button'
        label='Crear cuenta'
        className='mx-auto mt-10 w-fit'
        pending={pending}
      />
    </form>
  );
}
