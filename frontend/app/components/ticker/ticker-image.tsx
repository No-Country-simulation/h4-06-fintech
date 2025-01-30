import Image from 'next/image';

interface TickerImageProps {
  src: string;
}

export function TickerImage({ src }: TickerImageProps) {
  return (
    <div className='flex aspect-square items-center rounded-md bg-foreground p-1 text-background'>
      <Image
        alt={`ticker's icon`}
        src={src}
        width={48}
        height={48}
      />
    </div>
  );
}
