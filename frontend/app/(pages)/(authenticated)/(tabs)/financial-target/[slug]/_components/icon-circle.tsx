import Image from 'next/image';

export interface IconCircleProps {
  icon: string;
  color?: 'default' | 'green' | 'yellow' | 'red';
}

export function IconCircle({ icon, color = 'default' }: IconCircleProps) {
  let style = 'bg-accent/50';

  if (color === 'red') style = 'bg-red-500';
  if (color === 'green') style = 'bg-green-500';
  if (color === 'yellow') style = 'bg-yellow-500';

  return (
    <div
      className={`flex aspect-square size-12 w-fit items-center justify-center rounded-full p-3 ${style} `}
    >
      <Image
        src={icon}
        height={44}
        width={44}
        alt='heart icon'
      />
    </div>
  );
}
