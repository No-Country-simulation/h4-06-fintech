'use client';
import { investStockAction } from '@/actions/investment/stock/invest-stock-action';
import SubmitButton from '@/components/button/submit-button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentProps, useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const initialState = {
  message: {
    amountInvested: [],
    stockSymbol: [],
    portfolioId: [],
  },
  success: false,
  actionErrorMessage: '',
};

interface Props {
  portfolioId: string;
}

export default function InvestStockForm({ portfolioId }: Props) {
  const [state, action, pending] = useActionState(
    investStockAction,
    initialState,
  );
  const router = useRouter();
  const path = usePathname();

  const symbol = path.split('/')[3];

  useEffect(() => {
    if (state.success) {
      router.replace('/invest-success');
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
      <input
        hidden
        defaultValue={symbol}
        name='stockSymbol'
      />
      <input
        hidden
        defaultValue={portfolioId}
        name='portfolioId'
      />
      <AuxInput
        label='Cantidad'
        name='amountInvested'
        type='number'
        placeholder='$500'
      />
      <section className='flex items-center justify-between gap-2 rounded-lg bg-primary/20 p-4'>
        <label
          className='text-xl font-medium'
          htmlFor='moneda'
        >
          Moneda
        </label>
        <Select name={`moneda`}>
          <SelectTrigger className='w-full md:max-w-[415px]'>
            <SelectValue placeholder='Selecciona una opción' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={'pesos'}>Pesos</SelectItem>
              <SelectItem value={'dolar'}>Dolar</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
      <SubmitButton
        label='Invertir'
        className='mt-10'
        pending={pending}
      />
    </form>
  );
}

interface AuxInputProps extends ComponentProps<'input'> {
  name: string;
  label: string;
}

export function AuxInput({ name, label, ...props }: AuxInputProps) {
  return (
    <section className='flex items-center justify-between gap-2 rounded-lg bg-primary/20 p-4'>
      <label
        className='text-xl font-medium'
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className='w-full rounded-md bg-secondary p-2 md:max-w-[415px]'
        name={name}
        type='text'
        {...props}
      />
    </section>
  );
}
