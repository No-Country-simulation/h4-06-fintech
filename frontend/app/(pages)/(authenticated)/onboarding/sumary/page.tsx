import OnboardingCompleted from "./_components/onboarding-completed";

export default async function Summary() {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return (
		<>
			<OnboardingCompleted />
		</>
	);
}
