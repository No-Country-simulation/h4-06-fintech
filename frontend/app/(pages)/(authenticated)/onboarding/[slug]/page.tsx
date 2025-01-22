import { OnboardingQuestion } from "./_components/onboarding-question";
import questionsData from "../_data/data.json";
import { redirect } from "next/navigation";

export default async function OnboardingPersonalizationPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const slug = (await params).slug;
	const currentIndex = Number(slug);
	const questions = questionsData.questions;
	const currentQuestion = questions[currentIndex - 1];

	if (
		Number.isNaN(currentIndex) ||
		currentIndex < 1 ||
		currentIndex > questions.length
	) {
		return redirect("/onboarding/1");
	}

	return (
		<div className="px-4 py-8 flex items-center justify-center">
			<OnboardingQuestion
				question={currentQuestion}
				currentIndex={currentIndex}
				totalQuestions={questions.length}
			/>
		</div>
	);
}
