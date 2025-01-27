'use client';

import { addFundsWalletAction } from '@/actions/wallet/add-funds-action';
import SubmitButton from '@/components/button/submit-button';
import Input from '@/components/input/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Wallet } from 'client-api/backend/modules/auth/interface/getProfile';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

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
        <Input
          label='Cantidad a ingresar'
          data-pw='amount'
          name='amount'
          type='number'
          error={state.message?.amount?.[0]}
          placeholder='$9999'
        />
        <Select name='walletId'>
          <SelectTrigger className='w-[280px]'>
            <SelectValue placeholder='Selecciona la billetera' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Wallet</SelectLabel>
              {wallets.map((w) => (
                <SelectItem
                  key={w.id}
                  value={w.id}
                >
                  {w.balanceDollars}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select name='currency'>
          <SelectTrigger className='w-[280px]'>
            <SelectValue placeholder='Selecciona un tipo de moneda' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Moneda</SelectLabel>
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
        <SubmitButton
          data-pw='submit-button'
          label='Agregar fondos'
          className='mt-10'
          pending={pending}
        />
      </form>
    </section>
  );
}
