import { Text } from '@/components/ui/text';
import { FinancialTargetCard } from '../financial-target/[slug]/_components/financial-target-card';

export default function InvestmentPage() {
  return (
    <section className='flex flex-col gap-20'>
      <header>
        <Text variant='header'>Inversiones</Text>
      </header>
      <section className='flex flex-wrap justify-between'>
        <FinancialTargetCard
          icon='/svg/glass.svg'
          href='/investment/explore'
        >
          <p className='text-xl font-medium'>Explorar inversiones</p>
        </FinancialTargetCard>

        <FinancialTargetCard
          icon='/svg/chart.svg'
          href='/investment/my-investments'
        >
          <p className='text-xl font-medium'>Mis Inversiones</p>
        </FinancialTargetCard>

        <FinancialTargetCard
          icon='/svg/heart.svg'
          href='/investment/favorites'
        >
          <p className='text-xl font-medium'>Favoritos</p>
        </FinancialTargetCard>
      </section>
    </section>
  );
}
