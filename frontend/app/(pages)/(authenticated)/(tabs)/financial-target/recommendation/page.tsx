'use client';

// Components
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { RecommendationCard } from './_components/recommendation-card';

import { createFinancialTargetAction } from '@/actions/financial-target/create-action';
import Link from 'next/link';
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';
import { useState } from 'react';
import { toast } from 'sonner';

export default function RecommendationPage() {
  const [target] = useQueryStates(
    {
      name: parseAsString,
      durationMonths: parseAsInteger,
      amount: parseAsInteger,
    },
    {
      history: 'push',
    },
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateTarget = async () => {
    try {
      setIsLoading(true);

      // Llama a la Server Action
      await createFinancialTargetAction({
        name: target.name!,
        amount: target.amount!,
        durationMonths: target.durationMonths!,
      });
    } catch (err) {
      toast.error('Error al establecer un objetivo financiero');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='flex flex-col gap-[72px]'>
      <header>
        <Text className='max-w-[1040px] text-4xl font-medium'>
          Te recomendamos estas opciones de cuotas mensuales para lograr tu
          objetivo
        </Text>
      </header>
      <section className='flex flex-col gap-28'>
        <section className='flex flex-col gap-4'>
          <section className='flex flex-wrap justify-center gap-6'>
            <RecommendationCard
              amount={target.amount!}
              meses={8}
            />
            <RecommendationCard
              amount={target.amount!}
              meses={6}
            />
            <RecommendationCard
              amount={target.amount!}
              meses={4}
            />
          </section>
          <p className='text-center'>
            Seleccióna una opción y haz clic en{' '}
            <span className='italic'>Crear nuevo objetivo</span> para confirmar
          </p>
        </section>
        <footer className='mx-auto flex w-fit flex-wrap justify-center gap-6'>
          <Link href={`/financial-target/create`}>
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
