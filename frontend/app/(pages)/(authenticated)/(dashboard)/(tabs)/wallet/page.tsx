import { PageHeader } from '@/components/common/page/page-header';
import { Card } from '@/components/ui/card';
import { formatMoney } from '@/lib/money-formatter';
import { backend } from '@api';
import Link from 'next/link';

export default async function WalletPage() {
  const { wallet } = await backend.authApi.getProfile();

  const firstWallet = wallet[0];

  return (
    <PageHeader title='Billetera'>
      <section className='flex gap-4'>
        <section className='grid flex-1 grid-cols-2 gap-4'>
          <Card variant='secondary'>
            <p className='text-lg'>Tu dinero ARS</p>
            <p className='text-xl font-semibold'>
              {formatMoney(firstWallet.balancePesos)}
            </p>
          </Card>
          <Card variant='secondary'>
            <p className='text-lg'>Tu dinero USD</p>
            <p className='text-xl font-semibold'>
              {formatMoney(firstWallet.balanceDollars)}
            </p>
          </Card>
        </section>
        <section className='flex flex-1 gap-4'>
          <Link
            href='/wallet/add-funds'
            className='flex-1'
          >
            <Card variant='secondary'>
              <p className='text-center text-xl font-medium'>Ingresar Dinero</p>
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
