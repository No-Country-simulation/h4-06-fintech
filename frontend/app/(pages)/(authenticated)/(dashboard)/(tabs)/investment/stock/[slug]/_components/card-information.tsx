import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import Image from 'next/image';
import { formatMoney } from '@/lib/money-formatter';
import { card } from './card-item';

type Info = {
  currentPrice: number;
  changePercent: string;
  previousClose: number;
  name: string;
  isUp: boolean;
};

export function CardInformation({ info, slug }: { info: Info; slug: string }) {
  const information = card.find((item) => item.id === slug);

  return (
    <Card className='flex flex-col items-center gap-8 bg-[#64CFF6]/50 p-10 lg:flex-row'>
      <section className='flex min-w-fit flex-wrap items-center justify-center gap-12 md:justify-start'>
        <div className='flex min-w-fit items-center justify-between gap-2'>
          <div className='flex aspect-square h-[80px] w-[80px] items-center justify-center rounded-[20px] bg-black p-4'>
            <Image
              src={information?.image || ''}
              alt={info.name}
              width={64}
              height={64}
            />
          </div>
          <section>
            <p className='font-bold'>{slug}</p>
            <p className='text-sm'>{info.name}</p>
          </section>
        </div>
        <div className='flex min-w-fit flex-col justify-center gap-y-2'>
          <section className='flex gap-1'>
            <Text variant='header'>{formatMoney(info.currentPrice)}</Text>
            <p
              className={
                info.isUp
                  ? 'text-[#04914F]'
                  : 'text-[#FF0000]' + ' mt-2 text-xl'
              }
            >
              {info.changePercent}%
            </p>
            <span className='mt-2 font-poppins-light text-muted-foreground'>
              Hoy
            </span>
          </section>
          <section className='flex gap-1'>
            <p className='text-lg text-[#06040480] sm:text-2xl'>
              {formatMoney(info.previousClose)}
            </p>
            <p className='min-w-fit text-sm font-light sm:text-xl'>
              Cierre anterior
            </p>
          </section>
        </div>
      </section>
      <section className='flex w-full justify-center'>
        <Text className='max-w-[300px] text-center font-poppins-light text-2xl/9 leading-10'>
          {information?.description}
        </Text>
      </section>
    </Card>
  );
}
