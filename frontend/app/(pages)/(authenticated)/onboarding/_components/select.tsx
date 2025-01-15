import { OnboardingState } from "@/actions/onboarding/onboarding-action";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";

interface SelectComponentProps {
  formData: {
    financialGoal: string;
    knowledgeLevel: string;
    riskLevel: string;
  };
  handleSelectChange: (field: 'financialGoal' | 'knowledgeLevel' | 'riskLevel', value: string) => void;
  state: OnboardingState;
}

export function SelectComponent({ formData, handleSelectChange, state }: SelectComponentProps) {
  return (
    <div className="space-y-3">
      <Select
          name="financialGoal"
          value={formData.financialGoal || undefined}
          onValueChange={(value) => handleSelectChange('financialGoal', value)}
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Selecciona un objetivo financiero' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Objetivos financieros</SelectLabel>
              <SelectItem value='Ahorro'>Ahorro</SelectItem>
              <SelectItem value='Inversion'>Inversion</SelectItem>
              <SelectItem value='Retiro'>Retiro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-red-500 text-sm ">{state.message?.financialGoal?.[0]}</p>
        
        <Select
          name='knowledgeLevel'
          value={formData.knowledgeLevel || undefined}
          onValueChange={(value) => handleSelectChange('knowledgeLevel', value)}
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Selecciona tu nivel' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Nivel de conocimiento</SelectLabel>
              <SelectItem value='Básico'>Básico</SelectItem>
              <SelectItem value='Intermedio'>Intermedio</SelectItem>
              <SelectItem value='Avanzado'>Avanzado</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-red-500 text-sm ">{state.message?.knowledgeLevel?.[0]}</p>
        <Select
        name='riskLevel'
        value={formData.riskLevel || undefined}
        onValueChange={(value) => handleSelectChange('riskLevel', value)}
        >
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Selecciona tu nivel de riesgo' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Nivel de riesgo</SelectLabel>
              <SelectItem value='Bajo'>Bajo</SelectItem>
              <SelectItem value='Medio'>Medio</SelectItem>
              <SelectItem value='Alto'>Alto</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-red-500 text-sm ">{state.message?.riskLevel?.[0]}</p>
    </div>
  );
}