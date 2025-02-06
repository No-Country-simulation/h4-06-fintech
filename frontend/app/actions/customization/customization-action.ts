'use server';
import { backend } from "@api";
import { revalidatePath } from "next/cache";

export type CustomizationState = {
  message?: {
    [key: string]: never[];
  };
  success?: boolean;
  actionErrorMessage?: string;
};

export async function customizationAction(
  prevState: CustomizationState,
  formData: FormData,
): Promise<CustomizationState> {
  const data = {
    categories: formData.get(`question_1`)?.toString() || '',
    strategy: formData.get(`question_2`)?.toString() || '',
    method: formData.get(`question_3`)?.toString() || '',
    newsSource: formData.get(`question_4`)?.toString() || '',
    instrument: formData.get(`question_5`)?.toString() || '',
    age: formData.get(`question_6`)?.toString() || '',
    investingYears: formData.get(`question_7`)?.toString() || '',
    goal: formData.get(`question_8`)?.toString() || '',
    monthlyAmount: formData.get(`question_9`)?.toString() || '',
    incomeSource: formData.get(`question_10`)?.toString() || '',
  };

  console.log({ data });

  try {
    // First try to get existing customization data
    const existingData = await backend.customizationApi.getOne();
    console.log({ existingData });

    if (existingData) {
      // If exists, update it
      const response = await backend.customizationApi.update(data);
      console.log({ response });
    } else {
      // If doesn't exist, create new
      const response = await backend.customizationApi.create(data);
      console.log({ response });
    }
    revalidatePath('/customization');

    return { success: true };
  } catch (error) {
    console.error(error);
    return { 
      success: false,
      actionErrorMessage: 'Error saving customization data'
    };
  }
}
