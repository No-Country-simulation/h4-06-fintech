'use client';

import { financialTargetAction } from '@/actions/financial-target/create-action';
import SubmitButton from '@/components/button/submit-button';
import Input from '@/components/input/input';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const initialState = {
  message: {
    name: [],
    amount: [],
    durationMonths: [],
    category: [],
  },
  success: false,
  actionErrorMessage: '',
};

export default function FinancialTargetForm() {
  const [state, action, pending] = useActionState(
    financialTargetAction,
    initialState,
  );
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast('Objetivo establecio con exito 🎉');
    }

    if (state.actionErrorMessage) {
      toast.error(state.actionErrorMessage);
    }
  }, [state, router]);

  return (
    <form
      action={action}
      className='grid grid-cols-2 flex-col gap-8'
    >
      <Input
        data-pw='name'
        label='Nombre de tu objetivo'
        name='name'
        error={state.message?.name?.[0]}
        placeholder='Cambiar el auto, vacaciones 2025, ...'
      />
      <Input
        data-pw='amount'
        label='Objetivo'
        name='amount'
        type='number'
        error={state.message?.amount?.[0]}
        placeholder='$9999'
      />
      <Input
        data-pw='months'
        label='Meses'
        name='durationMonths'
        type='number'
        error={state.message?.durationMonths?.[0]}
        placeholder='12 meses'
      />
      <Input
        data-pw='months'
        label='Categoria'
        name='category'
        error={state.message?.category?.[0]}
        placeholder='Vida | Vacaciones | Ocio'
      />
      <SubmitButton
        data-pw='submit-button'
        label='Crear objetivo'
        className='col-span-2 mt-10'
        pending={pending}
      />
    </form>
  );
}
