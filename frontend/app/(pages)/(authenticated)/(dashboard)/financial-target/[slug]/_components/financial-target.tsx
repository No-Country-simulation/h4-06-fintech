import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { formatMoney } from '@/lib/money-formatter';
import { backend } from '@api';

interface Props {
  id: string;
}

export async function FinancialTarget({ id }: Props) {
  const target = await backend.financialTargetApi.getOne({ id });

  return (
    <section className='relative flex h-full flex-col gap-12'>
      <header className='flex flex-col gap-4'>
        <Text variant='header'>Tu objectivo financiero</Text>
        <Text variant='small'>{target?.name}</Text>
      </header>
      <section className='grid grid-cols-2 gap-4'>
        <Card>
          <Text>Monto del objetivo</Text>
          <p>{formatMoney(Number(target.amount))}</p>
        </Card>
        <Card>
          <Text>Tu progreso</Text>
          <p>{formatMoney(Number(target.progress))}</p>
        </Card>
        <Card>Porcentaje de objetivo/ visualizado gráficamnete</Card>
        <Card>
          <Text>Fecha Límitte</Text>
          <Text>
            22 de enero de 2026
            {/* {getLimitDate(target?.createdAt!, target?.durationMonths!)} */}
          </Text>
          <Text>
            11 meses para llegar a la fecha límite
            {/* {getMonthsUntil(target?.createdAt!, target?.durationMonths!)} */}
          </Text>
        </Card>
        <Card>
          <Text>Sugerencia gráfica,</Text>
          <Text>
            ejemplo: si añades $30.000 cada mes llegarás al objetivo en 3 meses
          </Text>
        </Card>
        <section className='flex flex-col justify-center gap-2'>
          <Button variant='secondary'>Desactivar objectivo</Button>
          <Button variant='secondary'>Desactivar Notificaciones</Button>
        </section>
      </section>
      <Button
        variant='secondary'
        size='full'
        className='absolute bottom-0 right-0 z-[9999] w-fit'
      >
        ingresar dinero
      </Button>
    </section>
  );
}
