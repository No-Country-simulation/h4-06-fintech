import { useActionState } from "react";
import { redirect } from "next/navigation";
import { useFormPersistence } from "@/hooks/use-form-persistence";
import { initialState } from "../const/variable";
import type { OnboardingAnswers } from "../_types/onboarding";
import { initialFormData } from "../const/variable";
import { onboardingAction } from "@/actions/onboarding/onboarding-action";
import { useEffect } from "react";

export function useOnboarding() {
	const [answers, setAnswers] = useFormPersistence<OnboardingAnswers>(
		"onboarding-answers",
		initialFormData,
	);
	const [state, action, pending] = useActionState(
		onboardingAction,
		initialState,
	);

	useEffect(() => {
		if (state.success && state.redirect) {
			redirect(state.redirect);
		}
	}, [state.success, state.redirect]);

	const handleAnswer = (questionId: number, answer: string) => {
		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[`question_${questionId}`]: answer,
		}));
	};

	const formAction = async (formData: FormData) => {
		const formDataObject = { ...answers };
		formData.set("formData", JSON.stringify(formDataObject));
		await action(formData);
	};

	return {
		handleAnswer,
		formAction,
		answers,
		pending,
	};
}
