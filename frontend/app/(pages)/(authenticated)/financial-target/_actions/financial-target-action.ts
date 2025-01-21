'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import * as zod from 'zod';

const FinancialTargetSchema = zod.object({
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

export async function financialTargetAction(
  prevState: FinancialTargetState,
  formData: FormData,
): Promise<FinancialTargetState> {
  const name = formData.get('name');
  const amount = formData.get('amount');
  const months = formData.get('months');
  const priority = formData.get('priority');

  const data = { name, amount, months, priority };

  const result = FinancialTargetSchema.safeParse(data);

  if (!result.success) {
    return {
      message: result.error.flatten().fieldErrors,
      success: false,
    };
  }

  revalidatePath('/home', 'page');
  redirect('/home');
}
