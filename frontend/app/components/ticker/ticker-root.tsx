import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { TickerImage } from './ticker-image';

interface RootProps extends PropsWithChildren {
  symbol: string;
  name: string;
  image: string;
  isUp?: boolean;
}

export function Root({ image, name, isUp, children }: RootProps) {
  return (
    <section className='flex items-center justify-between rounded-md bg-primary/10 p-2 transition-colors hover:bg-primary/10'>
      <section className='flex items-center gap-4'>
        <TickerImage src={image} />
        <p className='text-lg font-medium'>{name}</p>
        {isUp !== undefined && (
          <Image
            alt='stock evolution'
            src={isUp ? '/svg/is-up.svg' : '/svg/is-down.svg'}
            height={24}
            width={24}
          />
        )}
      </section>
      {children}
    </section>
  );
}
