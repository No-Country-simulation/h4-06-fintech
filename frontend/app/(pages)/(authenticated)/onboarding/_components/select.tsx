import type { OnboardingState } from "@/actions/onboarding/onboarding-action";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import questionsData from "../_data/data.json";

// Define types for the questions data
type Question = {
	id: number;
	question: string;
	options: string[];
};

interface SelectComponentProps {
	formData: {
		[key: string]: string; // Make it dynamic to accept any string key
	};
	handleSelectChange: (field: string, value: string) => void;
	state: OnboardingState;
}

export function SelectComponent({
	formData,
	handleSelectChange,
	state,
}: SelectComponentProps) {
	const questions: Question[] = questionsData.questions;

	return (
		<div className="space-y-6 w-full max-w-3xl mx-auto">
			{questions.map((question) => (
				<div key={question.id} className="space-y-2">
					{/* Question Label */}
					<h3 className="font-medium text-sm sm:text-base text-foreground/90">
						{question.question}
					</h3>

					{/* Select Component */}
					<Select
						name={`question_${question.id}`}
						value={formData[`question_${question.id}`] || undefined}
						onValueChange={(value) =>
							handleSelectChange(`question_${question.id}`, value)
						}
					>
						<SelectTrigger className="w-full min-h-[2.5rem] text-sm sm:text-base">
							<SelectValue placeholder="Selecciona una opción" />
						</SelectTrigger>
						<SelectContent className="max-h-[300px] overflow-y-auto">
							{question.options.map((option, index) => (
								<SelectItem
									key={index}
									value={option}
									className="text-sm sm:text-base py-2.5 cursor-pointer"
								>
									{option}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					{/* Error Message */}
					{state.message?.[`question_${question.id}`]?.[0] && (
						<p className="text-xs sm:text-sm text-red-500">
							{state.message[`question_${question.id}`][0]}
						</p>
					)}
				</div>
			))}
		</div>
	);
}
