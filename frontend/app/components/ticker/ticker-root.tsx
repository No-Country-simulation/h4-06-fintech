import { PropsWithChildren } from 'react';
import { TickerEvolutionicon } from './ticker-evolution-icon';
import { TickerImage } from './ticker-image';

interface RootProps extends PropsWithChildren {
  symbol: string;
  name: string;
  image: string;
  isUp?: boolean;
}

export function Root({ image, name, isUp, symbol, children }: RootProps) {
  return (
    <section
      data-isup={isUp}
      className='group flex items-center justify-between rounded-md p-2 shadow-md transition-colors hover:bg-primary/10'
    >
      <section className='flex max-w-[600px] items-center gap-3'>
        <TickerImage src={image} />
        <section className='flex flex-col'>
          <p className='text-lg font-bold'>{symbol}</p>
          <p className='w-full max-w-[300px] text-sm font-light'>{name}</p>
        </section>
        {isUp !== undefined && <TickerEvolutionicon isUp={isUp} />}
      </section>
      {children}
    </section>
  );
}
