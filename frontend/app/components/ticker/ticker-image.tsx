import Image from 'next/image';

interface TickerImageProps {
  src: string;
}

export function TickerImage({ src }: TickerImageProps) {
  return (
    <div className='flex aspect-square h-[40px] w-[40px] items-center rounded-xl bg-foreground p-2 text-background'>
      <Image
        alt={`ticker's icon`}
        src={src}
        width={28}
        height={28}
      />
    </div>
  );
}
