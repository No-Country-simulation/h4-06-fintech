import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { HomeCard } from './_components/home-card';
import './home.css';
import { GraphComponent } from './_components/graph/graph';
import { Text } from '@/components/ui/text';


export default  function page() {

  return (

    <section className='flex h-full flex-col w-full max-w-[1200px] mx-auto p-4'>
      <Text variant='title' >¡Hola!</Text>
      <Text variant='small'>Estas son las novedades el día de hoy</Text>
      <section className='bento my-10'>
        <Suspense fallback={<Skeleton className='balance rounded-xl' />}>
          <HomeCard/>
        </Suspense>
      </section>
      <GraphComponent />
    </section>
  );
}
