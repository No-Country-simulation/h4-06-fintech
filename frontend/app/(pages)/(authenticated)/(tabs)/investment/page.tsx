import { Text } from '@/components/ui/text';
import Link from 'next/link';
import { FinancialTargetCard } from '../financial-target/[slug]/_components/financial-target-card';

export default function InvestmentPage() {
  return (
    <section className='flex flex-col gap-20'>
      <header>
        <Text variant='header'>Inversiones</Text>
      </header>
      <section className='flex flex-wrap justify-between'>
        <Link href={'/investment/explore'}>
          <FinancialTargetCard icon='/svg/glass.svg'>
            <p className='text-xl font-medium'>Explorar inversiones</p>
          </FinancialTargetCard>
        </Link>
        <FinancialTargetCard icon='/svg/chart.svg'>
          <p className='text-xl font-medium'>Mis Inversiones</p>
        </FinancialTargetCard>
        <FinancialTargetCard icon='/svg/heart.svg'>
          <p className='text-xl font-medium'>Favoritos</p>
        </FinancialTargetCard>
      </section>
    </section>
  );
}
