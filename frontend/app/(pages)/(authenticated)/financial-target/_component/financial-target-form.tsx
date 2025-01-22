'use client';
import SubmitButton from '@/components/button/submit-button';
import Input from '@/components/input/input';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { financialTargetAction } from '../_actions/financial-target-action';

const initialState = {
  message: {
    name: [],
    amount: [],
    months: [],
    monthlyContribution: [],
    priority: [],
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
    // TODO - hacer una peticion POST al backend guardando un nuevo objetivo financiero
    // Solo por ahora, guardar el resultado en local storage
    if (state.success) {
      toast('Objetivo establecio con exito 🎉');
      const prevFinancialTargets =
        JSON.parse(localStorage.getItem('financialTargets')!) ?? [];

      localStorage.setItem(
        'financialTargets',
        JSON.stringify([...prevFinancialTargets, state.message]),
      );
      router.replace('/home');
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
        name='months'
        type='number'
        error={state.message?.months?.[0]}
        placeholder='12 meses'
      />
      <Input
        data-pw='priority'
        label='Prioridad'
        name='priority'
        error={state.message?.priority?.[0]}
        placeholder='Alta | Media | Baja'
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
