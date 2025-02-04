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

export function CustomizationForm() {
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

  return (
    <section>
      <form
        action={action}
        className='flex w-full flex-col gap-3'
      >
        {questions.map((question) => (
          <section
            key={question.id}
            className='flex items-center justify-between rounded-md bg-primary/10 p-2'
          >
            <p className='text-lg font-medium'>{question.question}</p>
            <Select name={`question_${question.id}`}>
              <SelectTrigger className='w-full max-w-[415px] '>
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
          variant='secondary'
          className='mt-20 w-fit self-end rounded-lg px-14 font-semibold'
        >
          Guardar
        </Button>
      </form>
    </section>
  );
}
