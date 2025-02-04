import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import Link from 'next/link';
import { SuggestionsSection } from './_components/suggestions-section';

const LINKS = [
  {
    href: '/investment/stock',
    value: 'Acciones',
  },
  {
    href: '/investment/bonds',
    value: 'Bonos',
  },
  {
    href: '/investment/funds',
    value: 'Fondos comunes de inversión',
  },
  {
    href: '/investment/etfs',
    value: 'ETFs',
  },
];

export default function ExplorePage() {
  return (
    <section className='flex flex-col gap-20'>
      <header>
        <Text variant='header'>Explorar inversiones</Text>
      </header>
      <section className='flex flex-wrap items-center gap-5'>
        {LINKS.map((link) => (
          <Link
            className='flex-1 transition-opacity hover:opacity-50'
            key={link.href}
            href={link.href}
          >
            <Card className='h-[110px] items-center justify-center bg-secondary text-center'>
              <p className='px-4 text-xl font-medium'>{link.value}</p>
            </Card>
          </Link>
        ))}
      </section>
      <SuggestionsSection />
    </section>
  );
}
