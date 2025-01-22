"use server";

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
	let data = {};

	if (formDataJson && typeof formDataJson === "string") {
		try {
			data = JSON.parse(formDataJson);
		} catch (e) {
			console.error("Error parsing form data:", e);
		}
	}

	const validationResult = onboardingSchema.safeParse(data);

	if (!validationResult.success) {
		return {
			message: validationResult.error.flatten().fieldErrors,
			success: false,
		};
	}

	const searchParams = new URLSearchParams();
	for (const [key, value] of Object.entries(data)) {
		if (value) {
			searchParams.append(key, value.toString());
		}
	}

	return {
		success: true,
		redirect: `/onboarding/sumary?${searchParams.toString()}`,
	};
}
