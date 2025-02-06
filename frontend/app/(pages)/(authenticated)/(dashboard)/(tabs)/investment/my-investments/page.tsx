import { PageHeader } from '@/components/common/page/page-header';
import { MyInvestmentList } from './_components/my-investment-list';
import { Suspense } from 'react';
import { SkeletonList } from '@/components/ui/skeleton-list';

export default async function MyInvestmentsPage() {
  return (
    <PageHeader title='Mis inversiones'>
      <Suspense fallback={<SkeletonList />}>
        <MyInvestmentList />
      </Suspense>
    </PageHeader>
  );
}
