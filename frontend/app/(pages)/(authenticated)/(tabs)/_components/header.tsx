import Link from 'next/link';
import { HeaderNavbar } from './header-navbar';

export function Header() {
  return (
    <header className='b fixed top-0 flex w-full items-center justify-between bg-muted p-4'>
      <section>
        <Link href={'/home'}>
          <p className='text-3xl font-semibold text-primary'>iUpi</p>
        </Link>
      </section>
      <HeaderNavbar />
      <section>ACTIONS</section>
    </header>
  );
}
