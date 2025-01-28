'use client';

// Components
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { RecommendationCard } from './recommendation-card';

import { createFinancialTargetAction } from '@/actions/financial-target/create-action';
import { useTargetUrl } from '@/hooks/use-target-url';
import { generateMonthOptions } from '@/lib/generate-month-recommendation';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Recommendations() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const { amount, durationMonths, name } = useTargetUrl();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const meses = generateMonthOptions(durationMonths!);

  const handleCreateTarget = async () => {
    try {
      setIsLoading(true);

      // Llama a la Server Action
      await createFinancialTargetAction({
        name: name!,
        amount: amount!,
        durationMonths: durationMonths!,
      });
    } catch (err) {
      toast.error('Error al establecer un objetivo financiero');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const query = new URLSearchParams({
    name: name!,
    amount: amount!.toString(),
    durationMonths: durationMonths!.toString(),
  }).toString();

  return (
    <section className='flex flex-col gap-[72px]'>
      <header>
        <Text className='max-w-[1040px] text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
          Te recomendamos estas opciones de cuotas mensuales para lograr tu
          objetivo
        </Text>
      </header>
      <section className='flex flex-col gap-28'>
        <section className='flex flex-col gap-4'>
          <section className='flex flex-wrap justify-center gap-6'>
            {meses.map((meses) => (
              <button
                onClick={() => {
                  setSelectedCard(selectedCard === meses ? null : meses);
                }}
                data-active={selectedCard === meses}
                className='rounded-xl data-[active=true]:outline data-[active=true]:outline-primary'
                key={meses}
              >
                <RecommendationCard
                  amount={amount!}
                  meses={meses}
                />
              </button>
            ))}
          </section>
          <p className='text-center'>
            Seleccióna una opción y haz clic en{' '}
            <span className='italic'>Crear nuevo objetivo</span> para confirmar
          </p>
        </section>
        <footer className='mx-auto flex w-fit flex-wrap justify-center gap-6'>
          <Link href={`/financial-target/create?${query}`}>
            <Button
              variant='outline'
              size='custom'
            >
              Atrás
            </Button>
          </Link>
          <Button
            disabled={isLoading}
            onClick={handleCreateTarget}
            variant='secondary'
            size='custom'
          >
            Crear nuevo objetivo
          </Button>
        </footer>
      </section>
    </section>
  );
}
