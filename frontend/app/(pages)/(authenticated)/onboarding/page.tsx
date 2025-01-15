import OnboardingForm from "./_components/onboardingform";

export default function OnboardingPage() {
  return (
    <div className="max-w-lg mx-auto mt-12">
      <h1 className="text-2xl font-bold ">Hola usuario, bienvenido a <span className="text-blue-600">IUPIA</span></h1>
      <p className="text-sm text-gray-500 mt-2">Para comenzar, por favor completa el siguiente formulario para personalizar tu experiencia de inversión.</p>
      <OnboardingForm />
    </div>
  );
}

