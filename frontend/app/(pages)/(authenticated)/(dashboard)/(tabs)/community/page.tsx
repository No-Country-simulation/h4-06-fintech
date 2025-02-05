import { PageHeader } from '@/components/common/page/page-header';
import { NewsSection } from './_components/news-section';

export default async function ComunidadPage() {
  return (
    <PageHeader
      title='Comunidad'
      subtitle='Conectate y mantenete informado con las últimas novedades del mercado'
    >
      <NewsSection />
    </PageHeader>
  );
}
