'use client';

import { addFundsAction } from '@/actions/financial-target/add-funds-action';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const initialState = {
  message: {
    id: [],
    amount: [],
  },
  success: false,
  actionErrorMessage: '',
};

interface Props {
  closeDialog: () => void;
}

export function AddFundsForm({ closeDialog }: Props) {
  const path = usePathname();
  const id = path.split('/')[2];

  const [state, action, pending] = useActionState(addFundsAction, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success('Dinero agregado');
      closeDialog();
    }

    if (state.actionErrorMessage) {
      toast.error(state.actionErrorMessage);
    }
  }, [state, closeDialog]);

  return (
    <form
      action={action}
      className='flex flex-col gap-4'
    >
      <input
        hidden
        name='id'
        defaultValue={id}
      />
      <div className='flex items-center justify-between rounded-lg bg-primary/10 p-2'>
        <label
          className='font-medium'
          htmlFor='amount'
        >
          Cantidad
        </label>
        <input
          className='rounded-md bg-secondary p-2'
          type='number'
          placeholder='$2000'
          name='amount'
          defaultValue={id}
        />
      </div>
      <Button
        className='mx-auto w-fit px-6'
        disabled={pending}
      >
        Ingresar dinero
      </Button>
    </form>
  );
}
