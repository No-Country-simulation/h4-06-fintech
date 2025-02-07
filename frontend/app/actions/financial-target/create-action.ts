'use server';

import { backend } from '@api';
import { redirect } from 'next/navigation';
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

export type FinancialTargetSchema = zod.infer<typeof financialTargetSchema>;

export async function createFinancialTargetAction(
  payload: FinancialTargetSchema,
) {
  const result = financialTargetSchema.safeParse(payload);

  if (!result.success) {
    throw new Error('Error al establecer un objetivo financiero');
  }

  try {
    await backend.financialTargetApi.create({
      durationMonths: result.data.durationMonths,
      amount: result.data.amount,
      name: result.data.name,
      category: 'otro',
    });
  } catch (error) {
    console.error({ error });
  }

  redirect(`/financial-target/success`);
}
