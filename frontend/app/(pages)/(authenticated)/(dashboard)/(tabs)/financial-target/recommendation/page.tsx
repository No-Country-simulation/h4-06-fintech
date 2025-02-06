import { Loader } from '@/components/ui/loader';
import { Suspense } from 'react';
import Recommendations from './_components/recommendations';

export default function RecommendationPage() {
  return (
    <Suspense fallback={<Loader />}>
      <Recommendations />
    </Suspense>
  );
}
