import Image from 'next/image';

interface Props {
  header: string;
  icon: string;
  subtitle: string;
}

export function EmptySection({ header, icon, subtitle }: Props) {
  return (
    <section className='flex flex-col items-center justify-center gap-6'>
      <div className='rounded-lg bg-accent p-1 shadow-lg'>
        <Image
          alt='icon'
          src={icon}
          width={44}
          height={44}
        />
      </div>
      <section className='flex flex-col items-center gap-2'>
        <p className='text-center text-3xl'>{header}</p>
        <p className='text-center font-light'>{subtitle}</p>
      </section>
    </section>
  );
}
