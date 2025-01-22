import { Text } from '@/components/ui/text';
import FinancialTargetForm from './_component/financial-target-form';

export default function page() {
  return (
    <section className='flex flex-col gap-12'>
      <header className='flex flex-col gap-2'>
        <Text variant='header'>Objetivo Financiero</Text>
        <Text variant='default'>
          Defini tu objetivo financiero asi podemos ayudarte a conseguirlo
        </Text>
      </header>
      <FinancialTargetForm />
    </section>
  );
}
