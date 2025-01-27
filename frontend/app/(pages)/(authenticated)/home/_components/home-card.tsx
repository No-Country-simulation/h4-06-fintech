import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  href: string;
}

export function HomeCard({ href, children }: Props) {
  return (
    <Link
      className='group h-full'
      href={href}
    >
      <Card className='h-full transition-colors group-hover:bg-border'>
        {children}
      </Card>
    </Link>
  );
}
