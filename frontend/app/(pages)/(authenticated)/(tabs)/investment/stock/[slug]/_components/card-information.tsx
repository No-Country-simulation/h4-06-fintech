import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { GetByTickerResponse } from 'client-api/backend/modules/investment/stock/interface/getByTicker';
import Image from 'next/image';
import { formatMoney } from '@/lib/money-formatter';
import { card } from './card-item';

export function CardInformation({
  info,
  slug,
}: {
  info: GetByTickerResponse;
  slug: string;
}) {
  const isPositiveChange = info.price.changePercent > 0;
  const information = card.find((item) => item.id === slug);
  return (
    <Card className='flex flex-row gap-4 bg-muted p-10'>
      <div className='flex flex-col gap-4'>
        <Image
          src={information?.image || ''}
          alt={info.name}
          width={88}
          height={88}
          className='rounded-lg'
        />
        <Text>{info.name}</Text>
      </div>
      <Image
        src={isPositiveChange ? '/svg/is-up.svg' : '/svg/is-down.svg'}
        alt='arrow up'
        width={39}
        height={19}
        className='ml-10'
      />
      <div className='flex flex-col justify-start gap-y-2'>
        <Text
          variant='title'
          className='text-[40px]/[60px]'
        >
          {formatMoney(info.price.current)}
        </Text>

        <Text className='font-poppins-light text-2xl/9'>
          <span
            className={isPositiveChange ? 'text-[#04914F]' : 'text-[#FF0000]'}
          >
            {isPositiveChange ? '+' : ''}
            {formatMoney(info.price.current - info.price.previousClose)} (
            {isPositiveChange ? '+' : ''}
            {info.price.changePercent.toFixed(2)}%)
          </span>{' '}
          <span className='font-poppins-light text-xl/[30px] text-muted-foreground'>
            Hoy
          </span>
        </Text>

        <Text className='font-poppins-regular text-2xl/9 text-[#06040480]'>
          {formatMoney(info.price.previousClose)}
          <span className='ml-2 font-poppins-light text-xl/[30px] text-muted-foreground'>
            cierre dia anterior
          </span>
        </Text>
      </div>
      <Text className='ml-40 max-w-[300px] text-center font-poppins-light text-2xl/9 leading-10'>
        {information?.description}
      </Text>
    </Card>
  );
}
