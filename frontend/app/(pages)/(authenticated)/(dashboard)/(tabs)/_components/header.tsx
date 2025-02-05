import { HeaderNavbar } from './header-navbar';
import { HeaderRight } from './header-right';
import { HeaderLogo } from './header-logo';
import { HeaderHamburguer } from './header-hamburguer';

export function Header() {
  return (
    <header className='b fixed top-0 z-50 flex w-full items-center justify-between bg-muted px-12 py-4'>
      <HeaderLogo />
      <HeaderNavbar />
      <HeaderRight />
      <HeaderHamburguer />
    </header>
  );
}
