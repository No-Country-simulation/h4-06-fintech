import { Ticker } from '@/components/ticker/ticker';
import { Button } from '@/components/ui/button';
import { type Ticker as TickerType } from 'client-api/backend/modules/investment/stock/interface/getTickers';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  ticker: TickerType;
}

export function FavoriteItem({ ticker }: Props) {
  return (
    <Ticker.Root
      key={ticker.symbol}
      image={ticker.image}
      name={ticker.companyName}
      symbol={ticker.symbol}
    >
      <Ticker.Content>
        <Button className='w-fit rounded-lg bg-[#004AAD] px-6 py-2 shadow-none transition-colors hover:bg-secondary'>
          <Image
            src='/svg/heart-2.svg'
            alt='favorite icon'
            width={24}
            height={24}
          />
        </Button>
        <Link
          className='min-w-fit rounded-md bg-secondary/50 px-10 py-2 text-center font-medium transition-colors hover:bg-secondary'
          href={`/investment/my-investments/${ticker.symbol}`}
        >
          Ver más
        </Link>
      </Ticker.Content>
    </Ticker.Root>
  );
}
