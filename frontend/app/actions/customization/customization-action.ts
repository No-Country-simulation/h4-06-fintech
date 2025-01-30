'use server';

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
    category: formData.get(`question_1`),
    strategy: formData.get(`question_2`),
    method: formData.get(`question_3`),
    newsSource: formData.get(`question_4`),
    financialInstrument: formData.get(`question_5`),
    age: formData.get(`question_6`),
    timeInvesting: formData.get(`question_7`),
    goal: formData.get(`question_8`),
    monthlyInvestments: formData.get(`question_9`),
    incomeSource: formData.get(`question_10`),
  };

  console.log({ data });

  return { success: true } as CustomizationState;
}
