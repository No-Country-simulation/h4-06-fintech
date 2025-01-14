'use client';
import { onboardingAction } from "@/actions/onboarding/onboarding-action";
import SubmitButton from "@/components/button/submit-button";
import { useHasMounted } from "@/hooks/use-hasmounted";
import { useFormPersistence } from "@/hooks/use-form-persistence";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { SelectComponent } from "./select";

const initialState = {
  message: {
    financialGoal: [],
    knowledgeLevel: [],
  },
  success: false,
};

const initialFormData = {
  financialGoal: '',
  knowledgeLevel: '',
};

export default function OnboardingForm() {
  const hasMounted = useHasMounted();
  const [state, action, pending] = useActionState(onboardingAction, initialState);
  const router = useRouter();
  
  // Use the form persistence hook
  const [formData, setFormData] = useFormPersistence('onboarding-form', initialFormData);

  // Clear the form data when successfully submitted
  useEffect(() => {
    if (state.success) {
      // Clear persisted data
      setFormData(initialFormData);
      router.push('/onboarding/1');
    }
  }, [state.success, router, setFormData]);

  // Don't render until client-side hydration is complete
  if (!hasMounted) {
    return null;
  }

  const handleSelectChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className='mx-auto max-w-lg'>
      <form action={action}>
        <SelectComponent formData={formData} handleSelectChange={(field, value) => handleSelectChange(field, value)} state={state} />
        
        <SubmitButton
          label='Siguiente'
          pending={pending}
        />
      </form>
    </section>
  );
}
