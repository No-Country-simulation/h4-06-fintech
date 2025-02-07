'use server';

import { backend } from '@api';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const addFundsSchema = z.object({
  id: z.string(),
  amount: z.coerce.number(),
});

export type AddFundsState = {
  message?: {
    id?: string[];
    amount?: string[];
  };
  success?: boolean;
  actionErrorMessage?: string;
};

export async function addFundsAction(
  prevState: AddFundsState,
  formData: FormData,
): Promise<AddFundsState> {
  const id = formData.get('id');
  const amount = formData.get('amount');
  const { success, data } = addFundsSchema.safeParse({ id, amount });

  console.log({ data });

  if (!success) {
    return { success: false };
  }

  console.log({ data });

  try {
    await backend.financialTargetApi.addFunds({
      id: data.id,
      amount: data.amount,
    });
  } catch (error) {
    console.error(error);
    return { success: false };
  }

  revalidatePath(`/financial-target/${id}`, 'page');
  return { success: true };
}
