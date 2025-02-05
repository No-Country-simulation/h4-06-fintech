'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LINKS } from '../_data/header-links';

export function HeaderNavbar() {
  const pathname = usePathname();

  return (
    <section className='items-center gap-6 sm:flex hidden'>
      {LINKS.map((link) => (
        <Link
          data-active={pathname.includes(link.href)}
          className='group flex items-center gap-3 rounded-lg border border-foreground px-4 py-[10px] transition-colors hover:bg-primary/10 data-[active=true]:border-primary'
          key={link.href}
          href={link.href}
        >
          <span className='stroke-foreground text-foreground group-data-[active=true]:stroke-primary'>
            {link.icon}
          </span>
          <p className='hidden group-data-[active=true]:text-primary lg:block'>
            {link.value}
          </p>
        </Link>
      ))}
    </section>
  );
}
