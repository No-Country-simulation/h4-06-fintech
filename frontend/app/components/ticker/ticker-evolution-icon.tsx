import Image from 'next/image';

interface Props {
  isUp: boolean;
}

export function TickerEvolutionicon({ isUp }: Props) {
  return (
    <Image
      className='hidden md:block'
      alt='stock evolution'
      src={isUp ? '/svg/is-up.svg' : '/svg/is-down.svg'}
      height={28}
      width={156}
    />
  );
}
