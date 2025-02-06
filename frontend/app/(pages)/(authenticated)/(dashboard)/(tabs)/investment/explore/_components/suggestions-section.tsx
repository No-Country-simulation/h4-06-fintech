import { Card } from '@/components/ui/card';
import Link from 'next/link';

const LINKS = [
  {
    value: 'Tendencias',
    href: '/investment/trends',
  },
  {
    value: 'Según tu perfil',
    href: '/investment/recommended',
  },
  {
    value: 'Según tus preferencias',
    href: '/investment/preferences',
  },
];

export function SuggestionsSection() {
  return (
    <section className='flex flex-col gap-11 rounded-[20px]'>
      <header className='flex flex-col gap-2'>
        <p className='text-2xl font-semibold'>¡Sugerencias iUPi!</p>
        <p className='font-normal'>
          Explora nuestras recomendaciones personalizadas para que puedas
          invertir con seguridad
        </p>
      </header>
      <section className='flex flex-wrap justify-between gap-5'>
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='group w-full md:max-w-[290px]'
          >
            <Card className='h-[110px] items-center justify-center border-none bg-primary transition-colors group-hover:bg-primary/50'>
              <p className='text-xl font-medium text-background'>
                {link.value}
              </p>
            </Card>
          </Link>
        ))}
      </section>
    </section>
  );
}
