import { PageHeader } from '@/components/common/page/page-header';
import { NewsSection } from './_components/news-section';
import { Suspense } from 'react';
import { SkeletonList } from '@/components/ui/skeleton-list';

export default async function ComunidadPage() {
  return (
    <PageHeader
      title='Comunidad'
      subtitle='¡Conecta y mantenete informado de las últimas novedades del mercado!'
    >
      <Suspense fallback={<SkeletonList />}>
        <NewsSection />
      </Suspense>
    </PageHeader>
  );
}
