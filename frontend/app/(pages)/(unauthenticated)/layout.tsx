import { Header } from '@/components/common/header/header';
import { PropsWithChildren } from 'react';

export default function UnauthenticatedLayout({ children }: PropsWithChildren) {
  return (
    <section className='relative pt-[72px]'>
      <Header />
      {children}
    </section>
  );
}
