import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import Link from 'next/link';

const LINKS = [
  {
    value: 'Tendencias del mercado',
    href: '/investment/trends',
  },
  {
    value: 'En base a tu perfil',
    href: '/investment/recommended',
  },
  {
    value: 'Según tus preferencias',
    href: '/investment/preferences',
  },
];

export function SuggestionsSection() {
  return (
    <section className='flex flex-col gap-11 rounded-[20px] bg-primary/70 px-6 py-8'>
      <header className='flex flex-col gap-2'>
        <Text
          variant='header'
          className='text-background'
        >
          Sugerencias iUPi
        </Text>
        <Text
          variant='detail'
          className='text-background'
        >
          Explora nuestras recomendaciones personalizadas para que puedas
          invertir con seguridad
        </Text>
      </header>
      <section className='flex flex-wrap justify-center gap-5'>
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='group'
          >
            <Card className='h-[110px] w-full max-w-[290px] items-center justify-center border-none bg-primary/80 transition-colors group-hover:bg-primary/50'>
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
