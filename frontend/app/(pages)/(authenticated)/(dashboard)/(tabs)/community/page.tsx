import { PageHeader } from '@/components/common/page/page-header';
import { NewsSection } from './_components/news-section';

export default async function ComunidadPage() {
  return (
    <PageHeader
      title='Comunidad'
      subtitle='¡Conecta y mantenete informado de las últimas novedades del mercado!'
    >
      <NewsSection />
    </PageHeader>
  );
}
