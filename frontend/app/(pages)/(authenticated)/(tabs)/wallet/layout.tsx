import { Text } from '@/components/ui/text';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const links = [
  {
    href: '/wallet/add-funds',
    value: 'agregar fondos',
  },
  {
    href: '/wallet/retrieve-funds',
    value: 'retirar fondos',
  },
];

export default function WalleyLayout({ children }: PropsWithChildren) {
  return (
    <section className='flex flex-col gap-12'>
      <header className='flex flex-col gap-4'>
        <Text variant='header'>Tu wallet</Text>
        <ul className='flex gap-2'>
          {links.map((link, index) => (
            <Link
              className='rounded-full border px-4 py-1 transition-colors hover:bg-secondary'
              key={index}
              href={link.href}
            >
              {link.value}
            </Link>
          ))}
        </ul>
      </header>
      {children}
    </section>
  );
}
