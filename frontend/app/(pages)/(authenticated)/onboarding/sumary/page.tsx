// import ProfileOverview from "./_components/profile-overview";
import OnboardingCompleted from "./_components/onboarding-completed";

export default async function Summary() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
		<>
			{/* <ProfileOverview /> */}
			<OnboardingCompleted />
		</>
	);
}
