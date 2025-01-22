import { Button } from "@/components/ui/button";
import type { OptionsProps } from "../_types/onboarding";

export default function Options({
	question,
	answers,
	handleAnswer,
}: OptionsProps) {
	const isQuestionFive = question.id === 5;
	const isQuestionSevenOrEight = question.id === 7 || question.id === 8;

	return (
		<div
			className={`
        w-full 
        ${
					isQuestionFive
						? "grid grid-cols-1 2xl:grid-cols-2 gap-3 place-items-stretch"
						: isQuestionSevenOrEight
							? "flex flex-col sm:flex-row gap-3 justify-center items-center"
							: "flex flex-col gap-3"
				}
      `}
		>
			{question.options.map((option, index) => (
				<Button
					type="button"
					key={`question-${question.id}-option-${option}`}
					value={answers[`question_${question.id}`]}
					onClick={() => handleAnswer(question.id, option)}
					variant={"outline"}
					className={`
            rounded-lg border border-[#06040480] shadow-lg shadow-[#00000040] 
            text-base sm:text-xl md:text-2xl/9 font-poppins-medium
            min-h-[45px] sm:min-h-[50px] md:min-h-[54px]
            ${
							isQuestionFive
								? index === question.options.length - 1
									? "col-span-1 lg:col-span-2 w-full lg:max-w-[462px] lg:justify-self-center"
									: "w-full"
								: "w-full"
						}
            ${
							answers[`question_${question.id}`] === option
								? "bg-[#D8E0F2] text-foreground hover:bg-[#D8E0F2] tex-"
								: ""
						}
                        ${isQuestionSevenOrEight ? "w-full max-w-[247px]" : ""}
          `}
				>
					{option}
				</Button>
			))}
		</div>
	);
}
