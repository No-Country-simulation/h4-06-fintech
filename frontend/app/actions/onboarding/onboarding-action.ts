"use server";

import { authApi } from "client-api/backend/auth/auth.api";
import { OnboardingFormData } from "client-api/backend/onboarding/interface/onboarding";
import { onboardingApi } from "client-api/backend/onboarding/onboarding";
import { z } from "zod";

const onboardingSchema = z.object({
	question_1: z.string().min(1, { message: "Campo requerido" }),
	question_2: z.string().min(1, { message: "Campo requerido" }),
	question_3: z.string().min(1, { message: "Campo requerido" }),
	question_4: z.string().min(1, { message: "Campo requerido" }),
	question_5: z.string().min(1, { message: "Campo requerido" }),
	question_6: z.string().min(1, { message: "Campo requerido" }),
	question_7: z.string().min(1, { message: "Campo requerido" }),
	question_8: z.string().min(1, { message: "Campo requerido" }),
});

export type OnboardingState = {
	message?: {
		[key: string]: string[];
	};
	success?: boolean;
	redirect?: string;
};

export async function onboardingAction(
	state: OnboardingState,
	formData: FormData,
) {
	const formDataJson = formData.get("formData");
	let formValues = {} as OnboardingFormData;

	if (formDataJson && typeof formDataJson === "string") {
		try {
			formValues = JSON.parse(formDataJson);
		} catch (e) {
			console.error("Error parsing form data:", e);
		}
	}

	const validationResult = onboardingSchema.safeParse(formValues);

	if (!validationResult.success) {
		return {
			message: validationResult.error.flatten().fieldErrors,
			success: false,
		};
	}

	try {
		const data = {
			profile: {
				mainGoal: formValues.question_1,
				financialSkills: formValues.question_2,
				riskTolerance: formValues.question_3,
				monthlyInvestment: formValues.question_4,
				savingsOrInvestmentReason: formValues.question_5,
				investmentHorizon: formValues.question_6,
				hasInvestedBefore: formValues.question_7,
				financialGoal: formValues.question_8
			}
		};

		const userId = await authApi.getProfile();
		console.log("userId", userId);
		console.log("Sending data:", data);
		const response = await onboardingApi.createOnboarding(data, userId.id);
		console.log("Response:", response);

		return {
			success: true,
			redirect: `/onboarding/sumary/${userId.id}`,
		};
	} catch (error) {
		console.error("Error creating onboarding:", error);
		return {
			success: false,
			message: {
				question_1: ["Hubo un error al guardar tu perfil. Por favor intenta nuevamente."]
			}
		};
	}
}
