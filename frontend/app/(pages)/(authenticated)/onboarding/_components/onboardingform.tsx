'use client';
import { onboardingAction } from '@/actions/onboarding/onboarding-action';
import SubmitButton from '@/components/button/submit-button';
import { useFormPersistence } from '@/hooks/use-form-persistence';
import { useHasMounted } from '@/hooks/use-hasmounted';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import { SelectComponent } from './select';

const initialState = {
  message: {},
  success: false,
};

const initialFormData = {
  question_1: '',
  question_2: '',
  question_3: '',
  question_4: '',
  question_5: '',
  question_6: '',
  question_7: '',
  question_8: '',
};

export default function OnboardingForm() {
  const hasMounted = useHasMounted();
  const [state, action, pending] = useActionState(
    onboardingAction,
    initialState,
  );
  const router = useRouter();

  const [formData, setFormData] = useFormPersistence(
    'onboarding-form',
    initialFormData,
  );

  useEffect(() => {
    if (state.success && state.redirect) {
      setFormData(initialFormData);
      router.push(state.redirect);
    }

    if (state.message && Object.keys(state.message).length > 0) {
      toast.warning('Por favor, completa todos los campos requeridos.');
    }
  }, [state, router, setFormData]);

  if (!hasMounted) {
    return null;
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formAction = async (formData: FormData) => {
    // Add all form values from state to the FormData
    Object.entries(formData).forEach(([key, value]) => {
      formData.set(key, value);
    });
    await action(formData);
  };

  return (
    <form
      action={formAction}
      className='flex flex-col gap-8'
    >
      <SelectComponent
        formData={formData}
        handleSelectChange={handleSelectChange}
        state={state}
      />
      <input
        type='hidden'
        name='formData'
        value={JSON.stringify(formData)}
      />
      <SubmitButton
        label='Ver resumen'
        pending={pending}
      />
    </form>
  );
}
