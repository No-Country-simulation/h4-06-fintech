// types/onboarding.ts
export type OnboardingQuestion = {
	id: number;
	question: string;
	options: string[];
};

export type OnboardingAnswers = {
	[key: string]: string;
};

export interface OnboardingQuestionProps {
	question: OnboardingQuestion;
	currentIndex: number;
	totalQuestions: number;
}

export interface ProgressIndicatorProps {
	question: OnboardingQuestion;
	totalQuestions: number;
	currentIndex: number;
	answers: OnboardingAnswers;
}

export interface OptionsProps {
	question: OnboardingQuestion;
	answers: OnboardingAnswers;
	handleAnswer: (questionId: number, option: string) => void;
}

export interface NextButtonProps {
	handleNext: () => void;
	answers: OnboardingAnswers;
	question: OnboardingQuestion;
	currentIndex: number;
	totalQuestions: number;
	pending: boolean;
}
