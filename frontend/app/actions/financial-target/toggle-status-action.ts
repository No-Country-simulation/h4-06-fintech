'use server';

import { backend } from '@api';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const toggleStatusSchema = z.object({
  id: z.string(),
});

export async function toggleStatusAction(formData: FormData) {
  const id = formData.get('id');
  const data = toggleStatusSchema.parse({ id });

  try {
    await backend.financialTargetApi.toggleStatus({ id: data.id });
  } catch (error) {
    console.error(error);
  }

  revalidatePath(`/financial-target/${id}`);
}
