export default async function OnboardingPersonalizationPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  return (
    <section>
      <h1>Onboarding Personalization {slug}</h1>
    </section>
  );
}
