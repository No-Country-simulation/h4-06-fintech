import { authApi } from "client-api/backend/modules/auth/auth.api";
import ProfileOverview from "../_components/profile-overview";

export default async function OnboardingSummary() {
	const profile = await authApi.getProfile();
	console.log(profile);
	return <ProfileOverview profile={profile} />;
}
