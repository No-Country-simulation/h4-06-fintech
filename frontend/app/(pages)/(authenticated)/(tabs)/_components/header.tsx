import Link from 'next/link';
import { HeaderNavbar } from './header-navbar';
import { HeaderRight } from './header-right';

export function Header() {
  return (
    <header className='b fixed top-0 flex w-full items-center justify-between bg-muted px-12 py-4'>
      <section>
        <Link href={'/home'}>
          <p className='text-3xl font-semibold text-primary'>iUpi</p>
        </Link>
      </section>
      <HeaderNavbar />
      <HeaderRight />
    </header>
  );
}
