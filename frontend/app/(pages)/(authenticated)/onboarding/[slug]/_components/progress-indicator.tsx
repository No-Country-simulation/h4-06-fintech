import type { ProgressIndicatorProps } from "../_types/onboarding";

export default function ProgressIndicator({
	question,
	totalQuestions,
	currentIndex,
	answers,
}: ProgressIndicatorProps) {
	return (
		<div
			className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 
			bg-[#D8E0F2] rounded-full w-full max-w-[821px] 
			h-[48px] sm:h-[58px] md:h-[68px] 
			p-2 sm:p-3 
			shadow-md shadow-[#00000040] mt-20"
		>
			{Array.from({ length: totalQuestions }).map((_, idx) => (
				<div
					key={`progress-indicator-${question.id}-${idx}`}
					className={`
						h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 
						rounded-full flex items-center justify-center 
						text-base sm:text-lg md:text-xl font-poppins-medium
						${
							idx + 1 === currentIndex
								? "border-[1.5px] border-primary text-primary"
								: idx < currentIndex
									? answers[`question_${idx + 1}`]
										? "border-[1.5px] border-primary text-primary"
										: "border-[1.5px] border-[#BFBFBF] text-[#BFBFBF]"
									: "border-[1.5px] border-[#BFBFBF] text-[#BFBFBF]"
						}
					`}
				>
					{idx + 1}
				</div>
			))}
		</div>
	);
}
