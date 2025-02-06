import { Skeleton } from '@/components/ui/skeleton';

export default function loading() {
  return (
    <section className='flex flex-col gap-4'>
      <Skeleton className='h-60' />
      <Skeleton className='h-12' />
      <Skeleton className='h-8' />
      <section className='grid grid-cols-3 gap-4'>
        <Skeleton className='h-80' />
        <Skeleton className='h-80' />
        <Skeleton className='h-80' />
      </section>
    </section>
  );
}
