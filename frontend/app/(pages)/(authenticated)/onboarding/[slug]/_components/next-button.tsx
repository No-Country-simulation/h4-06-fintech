import { Button } from "@/components/ui/button";
import type { NextButtonProps } from "../_types/onboarding";

export default function NextButton({
	handleNext,
	answers,
	question,
	currentIndex,
	totalQuestions,
	pending,
}: NextButtonProps) {
	// Check if all questions have been answered
	const areAllQuestionsAnswered = Array.from({ length: totalQuestions }).every(
		(_, idx) => answers[`question_${idx + 1}`],
	);

	const commonButtonClasses = `
		fixed left-1/2 -translate-x-1/2 bottom-8 sm:bottom-16
		w-[calc(100%-2rem)] sm:w-full max-w-[360px]
		h-[65px] shadow-md shadow-[#00000040] rounded-xl 
		text-2xl/9 font-poppins-medium 
		bg-[#004AAD80] hover:bg-[#004badc2]
	`;

	return (
		<>
			{currentIndex === totalQuestions ? (
				<Button
					disabled={!areAllQuestionsAnswered || pending}
					type="submit"
					className={`${commonButtonClasses} ${
						areAllQuestionsAnswered ? "text-foreground" : "text-[#06040480]"
					}`}
				>
					Ver resumen
				</Button>
			) : (
				<Button
					type="button"
					onClick={handleNext}
					disabled={!answers[`question_${question.id}`]}
					className={`${commonButtonClasses} ${
						answers[`question_${question.id}`]
							? "text-foreground"
							: "text-[#06040480]"
					}`}
				>
					Siguiente
				</Button>
			)}
		</>
	);
}
