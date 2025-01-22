"use client";
import { useRouter } from "next/navigation";
import { useHasMounted } from "@/hooks/use-hasmounted";
import type { OnboardingQuestionProps } from "../_types/onboarding";
import ProgressIndicator from "./progress-indicator";
import Options from "./options";
import NextButton from "./next-button";

import { GoBack } from "./go-back";
import { useOnboarding } from "../hook/use-onboarding";

export function OnboardingQuestion({
	question,
	currentIndex,
	totalQuestions,
}: OnboardingQuestionProps) {
	const { answers, handleAnswer, formAction, pending } = useOnboarding();

	const hasMounted = useHasMounted();
	const router = useRouter();
	const handleNext = () => {
		if (currentIndex < totalQuestions) {
			router.push(`/onboarding/${currentIndex + 1}`);
		}
	};

	if (!hasMounted) return null;

	return (
		<div className="relative flex flex-col gap-4 sm:gap-6 items-center justify-center px-4 sm:px-6 md:px-8 w-full max-w-4xl">
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
			<h2 className="text-2xl font-semibold my-10">{question.question}</h2>

			{/* Options */}
			<form action={formAction} className="w-full flex flex-col items-center ">
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
