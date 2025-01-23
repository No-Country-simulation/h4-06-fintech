import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { Suspense } from 'react';
import './home.css';

export default function page() {
  return (
    <section className='flex h-full flex-col gap-4'>
      <h2 className='font-semibold'>Vista general</h2>
      <section className='bento'>
        <Suspense fallback={<Skeleton className='balance rounded-xl' />}>
          <Card>Ingresos</Card>
        </Suspense>
        <Card>Gastos</Card>
        <Suspense fallback={<Skeleton className='income rounded-xl' />}>
          <Card>Progreso hacia objetivos</Card>
        </Suspense>
        <Suspense fallback={<Skeleton className='income rounded-xl' />}>
          <Card>Inversiones</Card>
        </Suspense>
        <Card>
          <Link
            href='/financial-target'
            className='text-primary'
          >
            Mis ahorros
          </Link>
        </Card>
        <Card>Wallet</Card>
        <Card>Favoritos</Card>
        <Card>Agenda</Card>
        <Card>Inidicador nivel</Card>
        <Card className='graph'>Grafico</Card>
        <Card className='graph'>Grafico</Card>
        <Card className='graph'>Grafico</Card>
      </section>
    </section>
  );
}
