import { Loader } from '@/components/ui/loader';
import { Suspense } from 'react';
import FinancialTargetForm from './_component/financial-target-form';

export default function page() {
  return (
    <Suspense fallback={<Loader />}>
      <FinancialTargetForm />
    </Suspense>
  );
}
