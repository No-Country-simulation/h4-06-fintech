import Image from 'next/image';

interface Props {
  isUp: boolean;
}

export function TickerEvolutionicon({ isUp }: Props) {
  return (
    <Image
      alt='stock evolution'
      src={isUp ? '/svg/is-up.svg' : '/svg/is-down.svg'}
      height={24}
      width={24}
    />
  );
}
