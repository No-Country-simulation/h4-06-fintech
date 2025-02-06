import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { getLimitDate } from '@/lib/dates';
import { getFinancialTargetPercentage } from '@/lib/get-financial-target-percentage';
import { formatMoney } from '@/lib/money-formatter';
import { backend } from '@api';
import { FinancialTargetCard } from './financial-target-card';
import { IconCircle } from './icon-circle';
import { NotificationBell } from './notification-bell';
import { FooterButtons } from './footer-buttons';

interface Props {
  id: string;
}

export async function FinancialTarget({ id }: Props) {
  const target = await backend.financialTargetApi.getOne({ id });

  const percentage = getFinancialTargetPercentage(
    target.amount,
    target.progress,
  );

  return (
    <section className='relative flex h-full flex-col gap-12'>
      <header className='flex items-center justify-between gap-4'>
        <Text variant='header'>{target?.name}</Text>
        <NotificationBell />
      </header>
      <section className='flex flex-col gap-14'>
        <header className='flex flex-wrap justify-between'>
          <FinancialTargetCard icon='/svg/heart.svg'>
            <Text>Monto del objetivo</Text>
            <p className='text-2xl font-medium'>
              {formatMoney(Number(target.amount))}
            </p>
          </FinancialTargetCard>
          <FinancialTargetCard icon='/svg/money.svg'>
            <Text>Tu progreso</Text>
            <p className='text-2xl font-medium'>
              {formatMoney(Number(target.progress))}
            </p>
          </FinancialTargetCard>
          <FinancialTargetCard icon='/svg/calendar.svg'>
            <Text>Fecha Límitte</Text>
            <p className='text-2xl font-medium'>
              {getLimitDate(target.createdAt, target.dateTarget)}
            </p>
          </FinancialTargetCard>
        </header>
        <section className='flex flex-wrap justify-around'>
          <Card className='h-[320px] w-full max-w-[400px] bg-secondary'>
            <header className='flex items-center'>
              <IconCircle icon='/svg/percent.svg' />
              <p className='flex-1 -translate-x-6 text-center text-xl'>
                Mi progreso
              </p>
            </header>
            <section className='flex h-full flex-col items-center gap-10'>
              <p className='text-[64px] font-medium'>{percentage}</p>
              <p className='text-center text-xl font-medium'>
                ¡Excelente! Completaste el {percentage} de tu objetivo ¡Seguí
                así!
              </p>
            </section>
          </Card>
          <Card className='h-[320px] w-full max-w-[400px] bg-secondary'>
            <header className='flex items-center'>
              <IconCircle icon='/svg/star.svg' />
              <p className='flex-1 -translate-x-6 text-center text-lg'>
                Sugerencia iUPi
              </p>
            </header>
            <section className='flex h-full flex-col items-center justify-center'>
              <p className='text-center text-xl font-medium'>
                ¿Sabías que? Si cambias el monto y ahorras $50.000 al mes,
                podrás cumplir tu objetivo en 2 meses
              </p>
            </section>
          </Card>
        </section>
        <FooterButtons
          id={id}
          isActive={target.isActive}
        />
      </section>
    </section>
  );
}
