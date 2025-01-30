import { Text } from '@/components/ui/text';

export default function RequirementsTab() {
  const requirements = [
    { label: 'Monto mínimo de inversión', value: '$255,70' },
    { label: 'Nivel de experiencia', value: 'Ninguna' },
    { label: 'Ubicación geográfica', value: 'Internacional' },
    { label: 'Tipo de inversor', value: 'Individual' },
    { label: 'Nivel de riesgo tolerable', value: 'Bajo' },
    { label: 'Plazo de inversión mínimo', value: '1-3 años' },
    { label: 'Requisitos de documentación', value: 'Identificación oficial' },
  ];

  return (
    <div className='space-y-2 p-4'>
      {requirements.map((req, index) => (
        <div
          key={index}
          className='flex items-center rounded-lg bg-muted p-4'
        >
          <Text
            variant='title'
            className='w-full max-w-[360px]'
          >
            {req.label}
          </Text>

          <div className='flex w-full min-w-[150px] max-w-[326px] items-center justify-center'>
            <Text
              variant='detail'
              className='h-[38px] w-full rounded-lg bg-[#5503A633] p-2 text-center font-poppins-light text-[#060404]'
            >
              {req.value}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}
