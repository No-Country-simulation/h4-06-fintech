import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { HomeCard } from './_components/home-card';
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
        <HomeCard href='/financial-target'>Progreso hacia objetivos</HomeCard>
        <HomeCard href='/'>Inversiones</HomeCard>
        <HomeCard href='/'>Mis ahorros</HomeCard>
        <HomeCard href='/'>Wallet</HomeCard>
        <HomeCard href='/'>Favoritos</HomeCard>
        <HomeCard href='/'>Agenda</HomeCard>
        <HomeCard href='/'>Indicador nivel</HomeCard>
        <Card className='graph'>Grafico</Card>
        <Card className='graph'>Grafico</Card>
        <Card className='graph'>Grafico</Card>
      </section>
    </section>
  );
}
