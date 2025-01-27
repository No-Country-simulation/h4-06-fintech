'use client';

import { redirectFinancialTargetAction } from '@/actions/financial-target/redirect-action';
import SubmitButton from '@/components/button/submit-button';
import Input from '@/components/input/input';
import { Button } from '@/components/ui/button';
import { useTargetUrl } from '@/hooks/use-target-url';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
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
  const { amount, durationMonths, name } = useTargetUrl();

  const [state, action, pending] = useActionState(
    redirectFinancialTargetAction,
    initialState,
  );
  const router = useRouter();

  // Al usar el hook useActionState no tenemos forma de setear
  // el estado del formulario de manera programatica sin tener que
  // enviar el formulario, por eso le asigno una key al formulario
  // y al apretar el boton de deshacer se actualizar la key haciendo
  // que el formulario se vuelva a montar
  const [formKey, setFormKey] = useState<number>(0);

  const handleReset = () => {
    setFormKey(formKey + 1);
  };

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
      key={formKey}
      action={action}
      className='flex flex-col gap-20'
    >
      <section className='flex flex-col gap-12 rounded-[20px] bg-secondary px-6 py-8'>
        <Input
          defaultValue={name ?? ''}
          variant='secondary'
          label='Nombre de objetivo financiero'
          name='name'
          error={state.message?.name?.[0]}
          placeholder='Vacaciones 2025'
        />
        <Input
          defaultValue={amount ?? ''}
          variant='secondary'
          label='Monto estimativo de lo que necesitás para lograr tu objetivo'
          name='amount'
          type='number'
          error={state.message?.amount?.[0]}
          placeholder='Monto en pesos'
        />
        <Input
          defaultValue={durationMonths ?? ''}
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
          onClick={handleReset}
          variant='outline'
          size='custom'
          className='border-red-500 text-red-500 hover:bg-red-100'
        >
          Deshacer
        </Button>
        <SubmitButton
          data-pw='submit-button'
          label='Continuar'
          pending={pending}
        />
      </footer>
    </form>
  );
}
