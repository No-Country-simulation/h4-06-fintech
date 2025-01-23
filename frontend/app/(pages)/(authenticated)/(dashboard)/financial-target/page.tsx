import { Text } from '@/components/ui/text';
import { TargetsList } from './_components/targets-list';

export default function page() {
  return (
    <section className='flex flex-col gap-12'>
      <header className='flex flex-col gap-4'>
        <Text variant='header'>Objetivos financieros</Text>
        <Text variant='small'>¿Cómo lo vas logrando?</Text>
      </header>
      <section>
        <TargetsList />
      </section>
    </section>
  );
}
