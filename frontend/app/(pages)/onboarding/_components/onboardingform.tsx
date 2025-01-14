'use client';
import { onboardingAction } from "@/actions/onboarding/onboarding-action";
import SubmitButton from "@/components/button/submit-button";
import Select from "@/components/select/select";
import { SelectItem } from "@/components/ui/select";
import { useActionState } from "react";

const initialState = {
  message: {
    financialGoal: [],
    knowledgeLevel: [],
  },
  success: false,
};

export default function OnboardingForm() {
  const [state, action, pending] = useActionState(onboardingAction, initialState);
  return (
    <section className="max-w-lg mx-auto">
      <form action={action} >
        <Select label='Objetivos financieros' name='financialGoal' placeholder='Objetivos financieros' error={state.message?.financialGoal?.[0]} >
            <SelectItem value='Ahorro'>Ahorro</SelectItem>
            <SelectItem value='Inversion'>Inversion</SelectItem>
            <SelectItem value='Retiro'>Retiro</SelectItem>
        </Select>
        <Select label='Nivel de conocimiento' name='knowledgeLevel' placeholder='Nivel de conocimiento' error={state.message?.knowledgeLevel?.[0]}>
            <SelectItem value='Básico'>Básico</SelectItem>
            <SelectItem value='Intermedio'>Intermedio</SelectItem>
            <SelectItem value='Avanzado'>Avanzado</SelectItem>
        </Select>
        <SubmitButton label='Siguiente' pending={pending} />
      

      </form>
    </section>
  );
}
