'use server';

import zod from 'zod';

const onboardingSchema = zod.object({
  question_1: zod.string().min(1, { message: 'Campo requerido' }),
  question_2: zod.string().min(1, { message: 'Campo requerido' }),
  question_3: zod.string().min(1, { message: 'Campo requerido' }),
  question_4: zod.string().min(1, { message: 'Campo requerido' }),
  question_5: zod.string().min(1, { message: 'Campo requerido' }),
  question_6: zod.string().min(1, { message: 'Campo requerido' }),
  question_7: zod.string().min(1, { message: 'Campo requerido' }),
  question_8: zod.string().min(1, { message: 'Campo requerido' })
});

export type OnboardingState = {
  message?: {
    [key: string]: string[];
  };
  success?: boolean;
  redirect?: string;
};

export async function onboardingAction(state: OnboardingState, formData: FormData) {
  // Get the form data from the hidden input
  const formDataJson = formData.get('formData');
  let data = {};
  
  if (formDataJson && typeof formDataJson === 'string') {
    try {
      data = JSON.parse(formDataJson);
    } catch (e) {
      console.error('Error parsing form data:', e);
    }
  }

  const parsedData = onboardingSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      message: parsedData.error.flatten().fieldErrors,
      success: false,
    };
  }
    
  // Create URL parameters
  const searchParams = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      searchParams.append(key, value.toString());
    }
  });
  
  return {
    success: true,
    redirect: `/onboarding/1?${searchParams.toString()}`,
  };
}