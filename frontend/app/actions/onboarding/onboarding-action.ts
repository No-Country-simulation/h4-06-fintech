'use server';

import zod from 'zod';

const onboardingSchema = zod.object({
    financialGoal: zod.string().min(1, { message: 'Objetivo financiero es requerido' }),
    knowledgeLevel: zod.string().min(1, { message: 'Nivel de conocimiento es requerido' }),
})
export type OnboardingState = {
    message?: {
        financialGoal?: string[];
        knowledgeLevel?: string[];
    };
    success?: boolean;
};

export async function onboardingAction(state: OnboardingState, formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const parsedData = onboardingSchema.safeParse(data);
    if (!parsedData.success) {
        return {
            message: parsedData.error.flatten().fieldErrors,
            success: false,
        };
    }
    
    return {
        success: true,
        redirect: '/onboarding/1',
    };
}