import Image from 'next/image';
import Link from 'next/link';

export function HeaderRight() {
  return (
    <section className='flex items-center gap-8'>
      <section className='flex gap-6'>
        <Image
          alt='Moon icon'
          src='/svg/moon.svg'
          width={24}
          height={24}
        />
        <Image
          alt='Moon icon'
          src='/svg/notification-bell.svg'
          width={24}
          height={24}
        />
      </section>
      <Link
        href='/profile'
        className='rounded-full border border-foreground p-[6px] transition-colors hover:bg-primary/10'
      >
        <Image
          alt='Moon icon'
          src='/svg/profile.svg'
          width={24}
          height={24}
        />
      </Link>
    </section>
  );
}
