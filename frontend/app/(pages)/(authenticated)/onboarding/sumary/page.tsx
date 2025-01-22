import ProfileOverview from "./_components/profile-overview";

export default async function Summary() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
		<>
			<ProfileOverview />
		</>
	);
}
