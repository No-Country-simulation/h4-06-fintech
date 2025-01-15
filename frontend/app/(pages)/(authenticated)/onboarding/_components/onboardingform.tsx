'use client';
import { onboardingAction } from "@/actions/onboarding/onboarding-action";
import SubmitButton from "@/components/button/submit-button";
import { useHasMounted } from "@/hooks/use-hasmounted";
import { useFormPersistence } from "@/hooks/use-form-persistence";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { SelectComponent } from "./select";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const initialState = {
  message: {
    financialGoal: [],
    knowledgeLevel: [],
    riskLevel: [],
  },
  success: false,
};

const initialFormData = {
  financialGoal: '',
  knowledgeLevel: '',
  riskLevel: '',
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
    
    if(state?.message?.financialGoal?.[0] || state?.message?.knowledgeLevel?.[0] || state?.message?.riskLevel?.[0]) {
      toast.warning('Por favor, completa todos los campos requeridos.');
    }
  }, [state.success, state.message, router, setFormData]);

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
    <section className='mt-6'>
      <form action={action}>
        <SelectComponent
          formData={formData}
          handleSelectChange={(field, value) =>
            handleSelectChange(field, value)
          }
          state={state}
        />

        <SubmitButton
          label='Ver resumen'
          pending={pending}
          className='mt-3'
        />
      </form>
      <Button
        type='button'
        onClick={() => router.push('/')}
        className='mt-3 bg-red-500 hover:bg-red-600 text-white w-full text-base'
      >
        Cancelar
      </Button>
    </section>
  );
}
