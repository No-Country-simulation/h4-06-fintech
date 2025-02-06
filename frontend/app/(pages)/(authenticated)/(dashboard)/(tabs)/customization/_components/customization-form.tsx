'use client';

import { customizationAction } from '@/actions/customization/customization-action';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';
import questions from '../_data/data.json' with { type: 'json' };

const initialState = {
  message: {
    category: [],
    strategy: [],
    method: [],
    newsSource: [],
    financialInstrument: [],
    age: [],
    timeInvesting: [],
    goal: [],
    monthlyInvestments: [],
    incomeSource: [],
  },
  success: false,
  actionErrorMessage: '',
};

export type CustomizationFormProps = {
  data: {
    [key: string]: string;
  };
};

export function CustomizationForm({ data }: CustomizationFormProps) {
  console.log({ data });
  const [state, action, pending] = useActionState(
    customizationAction,

    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast('Preferencias guardadadas correctamente 🎉');
    }

    if (state.actionErrorMessage) {
      toast.error(state.actionErrorMessage);
    }
  }, [state]);

const getDefaultValue = (questionId: number) => {
    if (!data) return undefined;

    const mapping: { [key: number]: keyof typeof data } = {
      1: 'categories',
      2: 'strategy',
      3: 'method',
      4: 'newsSource',
      5: 'instrument',
      6: 'age',
      7: 'investingYears',
      8: 'goal',
      9: 'monthlyAmount',
      10: 'incomeSource',
    };

    const value = data[mapping[questionId]];
    return value && value.trim() !== '' ? value : undefined;
  };
  return (
    <section>
      <form
        action={action}
        className='flex w-full flex-col gap-3'
      >
        {questions.map((question) => (
          <section
            key={question.id}
            className='flex flex-col justify-between gap-2 rounded-md bg-primary/10 p-2 md:flex-row md:items-center'
          >
            <p className='text-lg font-medium'>{question.question}</p>
            <Select name={`question_${question.id}`} defaultValue={getDefaultValue(question.id)}>
              <SelectTrigger className='w-full md:max-w-[415px]'>
                <SelectValue placeholder='Selecciona una opción' />

              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {question.options.map((option) => (
                    <SelectItem
                      className=''
                      key={option}
                      value={option}

                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </section>
        ))}
        <Button
          disabled={pending}
          type='submit'
          variant='secondary'
          className='mt-20 w-fit self-end rounded-lg px-14 font-semibold'
        >
          Guardar
        </Button>
      </form>
    </section>
  );
}
