import OnboardingForm from './_components/onboardingform';

export default function OnboardingPage() {
  return (
    <div className='mx-auto max-w-2xl p-4'>
      <h1 className='text-center text-2xl font-bold'>
        Hola usuario, bienvenido a <span className='text-blue-600'>IUPIA</span>
      </h1>
      <p className='mt-2 text-center text-sm text-gray-500'>
        Para comenzar, por favor completa el siguiente formulario para
        personalizar tu experiencia de inversión.
      </p>
      <OnboardingForm />
    </div>
  );
}
