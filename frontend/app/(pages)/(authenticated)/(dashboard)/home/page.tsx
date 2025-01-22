import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { Suspense } from 'react';
import { Balance } from './_components/balance';
import { Income } from './_components/income';
import { Targets } from './_components/targets';
import './home.css';

export default function page() {
  return (
    <section className='flex h-full flex-col gap-4'>
      <h2 className='font-semibold'>Vista general</h2>
      <section className='bento'>
        <Suspense fallback={<Skeleton className='balance rounded-xl' />}>
          <Balance />
        </Suspense>
        <Suspense fallback={<Skeleton className='income rounded-xl' />}>
          <Income />
        </Suspense>
        <Suspense fallback={<Skeleton className='income rounded-xl' />}>
          <Targets />
        </Suspense>
        <Card className='recent'>
          <Link
            href='/financial-target'
            className='text-primary'
          >
            Agregar objetivo financiero
          </Link>
        </Card>
        <Card className='investments'>investments</Card>
      </section>
    </section>
  );
}
