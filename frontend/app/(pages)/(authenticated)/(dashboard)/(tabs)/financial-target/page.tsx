import { Suspense } from 'react';
import { TargetsList } from './_components/targets-list';
import { SkeletonList } from '@/components/ui/skeleton-list';

export default async function page() {
  return (
    <Suspense fallback={<SkeletonList />}>
      <TargetsList />
    </Suspense>
  );
}
