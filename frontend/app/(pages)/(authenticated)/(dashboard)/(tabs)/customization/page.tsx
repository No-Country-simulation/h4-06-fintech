import { PageHeader } from '@/components/common/page/page-header';
import { CustomizationForm, CustomizationFormProps } from './_components/customization-form';
import { backend } from '@api';

export default async function CustomizationPage() {
  const data = await backend.customizationApi.getOne();
  return (
    <PageHeader
      title='Personalizar'

      subtitle='¡Personaliza tu experiencia del mercado en iUPi! Tus respuestas nos ayudan a brindarte las mejores recomendaciones para vos.'
    >
      <CustomizationForm data={data as CustomizationFormProps['data']} />
    </PageHeader>

  );
}
