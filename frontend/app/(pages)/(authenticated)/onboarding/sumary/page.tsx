import ProfileOverview from "./_components/profile-overview";
import { Suspense } from "react";
export default function Summary() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ProfileOverview />
			</Suspense>
		</>
	);
}
