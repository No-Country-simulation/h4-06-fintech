import { PageHeader } from '@/components/common/page/page-header';
import { Card } from '@/components/ui/card';
import { backend } from '@api';
import Link from 'next/link';
import { CurrencyCard } from './_components/currency-card';

export default async function WalletPage() {
  const { wallet } = await backend.authApi.getProfile();

  const firstWallet = wallet[0];

  return (
    <PageHeader title='Billetera'>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <CurrencyCard
            amount={firstWallet.balancePesos}
            type='ARS'
          />
          <CurrencyCard
            amount={firstWallet.balanceDollars}
            type='USD'
          />
        </section>
        <section className='flex flex-wrap gap-4'>
          <Link
            href='/wallet/add-funds'
            className='flex-1'
          >
            <Card variant='secondary'>
              <p className='min-w-fit text-center text-xl font-medium'>
                Ingresar Dinero
              </p>
            </Card>
          </Link>
          <Link
            href='/wallet/retrieve-funds'
            className='flex-1'
          >
            <Card variant='secondary'>
              <p className='text-center text-xl font-medium'>Extraer Dinero</p>
            </Card>
          </Link>
        </section>
      </section>
    </PageHeader>
  );
}
