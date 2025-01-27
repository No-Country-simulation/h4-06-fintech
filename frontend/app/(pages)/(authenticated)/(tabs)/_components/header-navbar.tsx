'use client';

import { HomeIcon } from '@/components/icons/home-icon';
import { InvestmentIcon } from '@/components/icons/investment-icon';
import { SettingIcon } from '@/components/icons/setting-icon';
import { WalletIcon } from '@/components/icons/wallet-icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  {
    href: '/home',
    value: 'Dashboard',
    icon: <HomeIcon />,
  },
  {
    href: '/investment',
    value: 'Inversiones',
    icon: <InvestmentIcon />,
  },
  {
    href: '/wallet',
    value: 'Billetera',
    icon: <WalletIcon />,
  },
  {
    href: '/setting',
    value: 'Configuración',
    icon: <SettingIcon />,
  },
];

export function HeaderNavbar() {
  const pathname = usePathname();

  return (
    <section className='flex items-center gap-6'>
      {LINKS.map((link) => (
        <Link
          data-active={pathname === link.href}
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
