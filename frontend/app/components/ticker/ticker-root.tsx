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
    <section data-isup={isUp} className='group flex items-center justify-between rounded-md  p-2 transition-colors hover:bg-primary/10 shadow-md'>
      <section className='flex items-center gap-3 w-full max-w-[600px]'>
        <TickerImage src={image} />
        <section className='flex flex-col'>
          <p className='text-lg font-bold'>{symbol}</p>
          <p className='text-sm font-light'>{name}</p>
        </section>
        {isUp !== undefined && <TickerEvolutionicon isUp={isUp} />}
      </section>
      {children}
    </section>
  );
}
