import Image from 'next/image';
import Link from 'next/link';
import { HeaderNav } from './header-nav';

export function Header() {
  return (
    <header className='fixed top-0 z-50 w-full border-b border-border bg-background'>
      <div className='mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4'>
        <Link href='/'>
          <section className='flex items-center gap-2'>
            <div className='relative size-10 rounded-lg bg-blue-600'>
              <Image
                src='/images/iupi-logo.png'
                alt='iupi logo'
                className='h-full w-full'
                fill
              />
            </div>
            <h3 className='text-xs uppercase'>Ahorro & inversiones</h3>
          </section>
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}
