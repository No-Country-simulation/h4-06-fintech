'use server';
// import { backend } from "@api";

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
    categories: formData.get(`question_1`),
    strategy: formData.get(`question_2`),
    method: formData.get(`question_3`),
    newsSource: formData.get(`question_4`),
    instrument: formData.get(`question_5`),
    age: formData.get(`question_6`),
    investingYears: formData.get(`question_7`),
    goal: formData.get(`question_8`),
    monthlyAmount: formData.get(`question_9`),
    incomeSource: formData.get(`question_10`),
  };

  console.log({ data });

  // try {
  //   // First try to get existing customization data
  //   const existingData = await backend.customizationApi.getOne();
  //   const user = await backend.authApi.getProfile();
  //   console.log({ user });
    

  //   if (existingData) {
  //     // If exists, update it
  //     await backend.customizationApi.update({
  //       id: user.id,
  //       data: data
  //     });


  //   } else {
  //     // If doesn't exist, create new
  //       await backend.customizationApi.create(data);
  //   }

  //   return { success: true };
  // } catch (error) {
  //   console.error(error);
  //   return { 
  //     success: false,
  //     actionErrorMessage: 'Error saving customization data'
  //   };
  // }
  return { success: true };
}
