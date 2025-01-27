'use server';

import { backend } from '@api';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const addFundsSchema = z.object({
  id: z.string(),
  amount: z.coerce.number(),
});

export async function addFundsAction(formData: FormData) {
  const id = formData.get('id');
  const amount = formData.get('amount');
  const { success, data } = addFundsSchema.safeParse({ id, amount });

  if (!success) {
    return;
  }

  try {
    await backend.financialTargetApi.addFunds({
      id: data.id,
      amount: data.amount,
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath(`/financial-target/${id}`, 'page');
}
