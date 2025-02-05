import { Skeleton } from '@/components/ui/skeleton';
import { MList } from '../motion/motion-list';
import { MItem } from '../motion/motion-item';

export function SkeletonList() {
  return (
    <MList className='flex flex-col gap-3 [mask-image:linear-gradient(black,transparent)]'>
      {Array(5)
        .fill(1)
        .map((n, index) => (
          <MItem key={index}>
            <Skeleton className='h-10 w-full' />
          </MItem>
        ))}
    </MList>
  );
}
