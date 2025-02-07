import { PageHeader } from '@/components/common/page/page-header';
import { CustomizationForm } from './_components/customization-form';
;

export default async function CustomizationPage() {


  return (
    <PageHeader
      title='Personalizar'
      subtitle='¡Personaliza tu experiencia del mercado en iUPi! Tus respuestas nos ayudan a brindarte las mejores recomendaciones para vos.'
    >
      <CustomizationForm />
    </PageHeader>
  );
}
