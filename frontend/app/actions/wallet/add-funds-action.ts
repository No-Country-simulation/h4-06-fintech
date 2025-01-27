'use server';

import { backend } from '@api';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const addFundsWalletSchema = z.object({
  amount: z.coerce.number(),
  walletId: z.string(),
  currency: z.enum(['DOLLARS', 'PESOS']),
});

export type AddFundsState = {
  message?: {
    amount?: string[];
  };
  success?: boolean;
  actionErrorMessage?: string;
};

export async function addFundsWalletAction(
  prevState: AddFundsState,
  formData: FormData,
): Promise<AddFundsState> {
  const amount = formData.get('amount');
  const walletId = formData.get('walletId');
  const currency = formData.get('currency');
  const { success, data, error } = addFundsWalletSchema.safeParse({
    amount,
    walletId,
    currency,
  });

  if (!success) {
    return { success: false, message: error.flatten().fieldErrors };
  }

  try {
    await backend.walletApi.makeTransaction({
      walletId: data.walletId,
      currency: data.currency,
      amount: data.amount,
      type: 'DEPOSIT',
    });
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, actionErrorMessage: error.message };
    }
  }

  revalidatePath('/wallet', 'page');
  return { success: true };
}
