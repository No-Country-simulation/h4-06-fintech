import Link from 'next/link';
import { FinancialTargetCard } from '../../../financial-target/[slug]/_components/financial-target-card';

const LINKS = [
  {
    href: '/investment/stock',
    value: 'Acciones',
    icon: '/svg/acciones.svg',
  },
  {
    href: '/investment/bonds',
    value: 'Bonos',
    icon: '/svg/bonos.svg',
  },
  {
    href: '/investment/funds',
    value: 'Fondos comunes de inversión',
    icon: '/svg/fondos.svg',
  },
  {
    href: '/investment/etfs',
    value: 'ETFs',
    icon: '/svg/etfs.svg',
  },
];

export function InstrumentsSection() {
  return (
    <section className='flex flex-wrap items-center justify-between gap-5'>
      {LINKS.map((link) => (
        <Link
          key={link.href}
          className='w-full transition-opacity hover:opacity-50 md:max-w-[320px]'
          href={link.href}
        >
          <FinancialTargetCard icon={link.icon}>
            <p className='text-center text-xl font-medium'>{link.value}</p>
          </FinancialTargetCard>
        </Link>
      ))}
    </section>
  );
}
