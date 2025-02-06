'use client';

import { addFundsWalletAction } from '@/actions/wallet/add-funds-action';
import SubmitButton from '@/components/button/submit-button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Wallet } from 'client-api/backend/modules/auth/interface/getProfile';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { AuxInput } from '../../../investment/stock/[slug]/invest/_components/invest-stock-form';

const initialState = {
  message: {
    amount: [],
  },
  success: false,
  actionErrorMessage: '',
};

const currency = [
  {
    value: 'DOLLARS',
    text: 'Dolares',
  },
  {
    value: 'PESOS',
    text: 'Pesos',
  },
];

interface Props {
  wallets: Wallet[];
}

export default function AddFundsForm({ wallets }: Props) {
  const router = useRouter();

  const [state, action, pending] = useActionState(
    addFundsWalletAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast('Fondos agregados correctamente 💸');
      router.replace('/wallet');
    }

    if (state.actionErrorMessage) {
      toast.error(state.actionErrorMessage);
    }
  }, [state, router]);

  return (
    <section>
      <form
        action={action}
        className='flex flex-col gap-8'
      >
        <AuxInput
          className='w-[280px]'
          label='Cantidad a ingresar'
          name='amount'
          placeholder='$9999'
          type='number'
        />
        <section className='flex items-center justify-between gap-2 rounded-lg bg-primary/20 p-4'>
          <label
            className='text-xl font-medium'
            htmlFor='currency'
          >
            Selecciona un tipo de moneda
          </label>
          <Select name='currency'>
            <SelectTrigger className='w-[280px]'>
              <SelectValue placeholder='Moneda' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {currency.map((c) => (
                  <SelectItem
                    key={c.text}
                    value={c.value}
                  >
                    {c.text}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </section>
        <input
          hidden
          name='walletId'
          defaultValue={wallets[0].id}
        />
        <SubmitButton
          variant='terciary'
          data-pw='submit-button'
          label='Agregar fondos'
          className='self-end'
          pending={pending}
        />
      </form>
    </section>
  );
}
