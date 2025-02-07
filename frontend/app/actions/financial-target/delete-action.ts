'use server';

import { backend } from '@api';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const deleteActionSchema = z.object({
  id: z.string(),
});

export async function deleteTargetAction(formData: FormData) {
  const id = formData.get('id');
  const data = deleteActionSchema.parse({ id });

  try {
    await backend.financialTargetApi.delete({ id: data.id });
  } catch (error) {
    console.error(error);
  }

  revalidatePath(`/financial-target`, 'page');
  redirect(`/financial-target`);
}
