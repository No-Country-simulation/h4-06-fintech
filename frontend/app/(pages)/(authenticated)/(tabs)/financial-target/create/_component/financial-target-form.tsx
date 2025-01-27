'use client';

import { financialTargetAction } from '@/actions/financial-target/create-action';
import SubmitButton from '@/components/button/submit-button';
import Input from '@/components/input/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const initialState = {
  message: {
    name: [],
    amount: [],
    durationMonths: [],
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
      className='flex flex-col gap-20'
    >
      <section className='flex flex-col gap-12 rounded-[20px] bg-secondary px-6 py-8'>
        <Input
          variant='secondary'
          label='Nombre de objetivo financiero'
          name='name'
          error={state.message?.name?.[0]}
          placeholder='Vacaciones 2025'
        />
        <Input
          variant='secondary'
          label='Monto estimativo de lo que necesitás para lograr tu objetivo'
          name='amount'
          type='number'
          error={state.message?.amount?.[0]}
          placeholder='Monto en pesos'
        />
        <Input
          variant='secondary'
          label='Define un plazo de tiempo en el que quieras lograrlo'
          name='durationMonths'
          type='number'
          error={state.message?.durationMonths?.[0]}
          placeholder='6 meses'
        />
      </section>
      <footer className='mx-auto flex w-fit flex-wrap items-center justify-center gap-4'>
        <Button
          variant='outline'
          size='custom'
          className='border-red-500 text-red-500'
        >
          Deshacer
        </Button>
        <SubmitButton
          data-pw='submit-button'
          label='Crear objetivo'
          pending={pending}
        />
      </footer>
    </form>
  );
}
