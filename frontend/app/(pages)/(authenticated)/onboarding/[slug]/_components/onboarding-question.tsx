"use client";
import { redirect, useRouter } from "next/navigation";
import { useFormPersistence } from "@/hooks/use-form-persistence";
import { useHasMounted } from "@/hooks/use-hasmounted";
import type { OnboardingAnswers } from "../_types/onboarding";
import type { OnboardingQuestionProps } from "../_types/onboarding";
import ProgressIndicator from "./progress-indicator";
import Options from "./options";
import NextButton from "./next-button";
import { useActionState, useEffect } from "react";
import { onboardingAction } from "@/actions/onboarding/onboarding-action";
import { initialFormData, initialState } from "../const/variable";
import { GoBack } from "./go-back";

export function OnboardingQuestion({
	question,
	currentIndex,
	totalQuestions,
}: OnboardingQuestionProps) {
	const router = useRouter();
	const [answers, setAnswers] = useFormPersistence<OnboardingAnswers>(
		"onboarding-answers",
		initialFormData,
	);
	const [state, action, pending] = useActionState(
		onboardingAction,
		initialState,
	);
	const hasMounted = useHasMounted();

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

	const handleNext = () => {
		if (currentIndex < totalQuestions) {
			router.push(`/onboarding/${currentIndex + 1}`);
		}
	};

	const formAction = async (formData: FormData) => {
		const formDataObject = { ...answers };
		formData.set("formData", JSON.stringify(formDataObject));
		await action(formData);
	};

	if (!hasMounted) return null;

	return (
		<div className="relative flex flex-col gap-4 sm:gap-6 items-center justify-center px-4 sm:px-6 md:px-8">
			{/* Go Back */}
			<GoBack />
			{/* Progress Indicator */}
			<ProgressIndicator
				question={question}
				currentIndex={currentIndex}
				totalQuestions={totalQuestions}
				answers={answers}
			/>
			{/* Question */}
			<h2 className="text-2xl font-semibold">{question.question}</h2>

			{/* Options */}
			<form action={formAction} className="w-full flex flex-col items-center">
				<div className="w-full flex flex-col gap-4">
					<Options
						question={question}
						answers={answers}
						handleAnswer={handleAnswer}
					/>
					<NextButton
						pending={pending}
						handleNext={handleNext}
						answers={answers}
						question={question}
						currentIndex={currentIndex}
						totalQuestions={totalQuestions}
					/>
				</div>
			</form>
		</div>
	);
}
