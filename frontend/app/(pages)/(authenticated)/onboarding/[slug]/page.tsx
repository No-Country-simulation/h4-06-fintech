import ProfileOverview from "./_components/profile-overview";

export default async function OnboardingPersonalizationPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  console.log(slug);

  return (
    <div className="container mx-auto py-8">
      <ProfileOverview />
    </div>
  );
}
