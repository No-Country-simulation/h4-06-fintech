'use server';

import { revalidatePath } from 'next/cache';
import * as zod from 'zod';

const financialTargetSchema = zod.object({
  name: zod
    .string()
    .min(4, { message: 'El nombre del objetivo debe tener al menos 4 letras' }),
  amount: zod.coerce.number().min(1, {
    message: 'La cantidad de dinero para el objetivo debe ser positiva',
  }),
  durationMonths: zod.coerce
    .number()
    .min(1, { message: 'Cantidad de meses debe ser mayor o igual a 1' }),
});

export type FinancialTargetSchema = zod.infer<typeof financialTargetSchema> & {
  id: string;
  createdAt: string;
  category: string;
  isActive: boolean;
  savedAmount: number;
};

type FinancialTargetState = {
  message?: {
    name?: string[];
    amount?: string[];
    durationMonths?: string[];
  };
  success?: boolean;
  actionErrorMessage?: string;
};

export type FinancialTargetLocalStorage = Required<
  FinancialTargetState['message'] & {
    id: string;
    createdAt: string;
    category: string;
    isActive: boolean;
    savedAmount: number;
  }
>;

export async function financialTargetAction(
  prevState: FinancialTargetState,
  formData: FormData,
): Promise<FinancialTargetState> {
  const name = formData.get('name');
  const amount = formData.get('amount');
  const durationMonths = formData.get('durationMonths');

  const data = { name, amount, durationMonths };

  const result = financialTargetSchema.safeParse(data);

  if (!result.success) {
    return {
      message: result.error.flatten().fieldErrors,
      success: false,
    };
  }

  revalidatePath('/home', 'page');
  // Devuelve informacion asi puede ser guardada en local storage del lado del cliente
  return {
    success: true,
    message: {
      amount: [String(result.data.amount)],
      durationMonths: [String(result.data.durationMonths)],
      name: [result.data.name],
    },
  };
  // redirect('/home');
}
