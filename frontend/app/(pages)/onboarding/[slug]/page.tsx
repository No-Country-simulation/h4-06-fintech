import ProfileOverview from './_components/profile-overview';

// export default async function OnboardingPersonalizationPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) { {
//   const slug = (await params).slug;

//   return {

//     <div className="container mx-auto py-8">
//       <ProfileOverview />
//     </div>
//   }
// }
export default async function OnboardingPersonalizationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log(slug);
  return (
    <div className='container mx-auto py-8'>
      <ProfileOverview />
    </div>
  );
}
