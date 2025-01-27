import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { RecommendationCard } from './_components/recommendation-card';

export default function page() {
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
          <section className='flex justify-center gap-6'>
            <RecommendationCard
              amount={25000}
              meses={8}
            />
            <RecommendationCard
              amount={33400}
              meses={6}
            />
            <RecommendationCard
              amount={50000}
              meses={4}
            />
          </section>
          <p className='text-center'>
            Seleccióna una opción y haz clic en{' '}
            <span className='italic'>Crear nuevo objetivo</span> para confirmar
          </p>
        </section>
        <footer className='mx-auto flex w-fit gap-6'>
          <Button
            variant='outline'
            size='custom'
          >
            Atrás
          </Button>
          <Button
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
