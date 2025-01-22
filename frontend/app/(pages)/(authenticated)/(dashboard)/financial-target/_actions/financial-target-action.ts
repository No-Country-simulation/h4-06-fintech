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
  months: zod.coerce
    .number()
    .min(1, { message: 'Cantidad de meses debe ser mayor o igual a 1' }),
  priority: zod.string().min(4, { message: 'Prioridad no valida' }),
});

export type FinancialTargetSchema = zod.infer<typeof financialTargetSchema> & {
  id: string;
};

type FinancialTargetState = {
  message?: {
    name?: string[];
    amount?: string[];
    months?: string[];
    priority?: string[];
  };
  success?: boolean;
  actionErrorMessage?: string;
};

export type FinancialTargetLocalStorage = Required<
  FinancialTargetState['message'] & {
    id: string;
  }
>;

export async function financialTargetAction(
  prevState: FinancialTargetState,
  formData: FormData,
): Promise<FinancialTargetState> {
  const name = formData.get('name');
  const amount = formData.get('amount');
  const months = formData.get('months');
  const priority = formData.get('priority');

  const data = { name, amount, months, priority };

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
      months: [String(result.data.months)],
      name: [result.data.name],
      priority: [result.data.priority],
    },
  };
  // redirect('/home');
}
