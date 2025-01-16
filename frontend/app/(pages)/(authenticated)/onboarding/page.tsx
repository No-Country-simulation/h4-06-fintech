import OnboardingForm from './_components/onboardingform';
import { OnboradingHeader } from './_components/onborading-header';

export default function OnboardingPage() {
  return (
    <section className='mx-auto flex max-w-2xl flex-col gap-12 py-20'>
      <OnboradingHeader />
      <OnboardingForm />
    </section>
  );
}
