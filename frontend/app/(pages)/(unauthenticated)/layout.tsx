import { Footer } from '@/components/common/footer/footer';
import { Header } from '@/components/common/header/header';
import { PropsWithChildren } from 'react';

export default function UnauthenticatedLayout({ children }: PropsWithChildren) {
  return (
    <section className='relative'>
      <Header />
      <section className='grid min-h-dvh grid-rows-[1fr_auto] pt-[72px]'>
        {children}
        <Footer />
      </section>
    </section>
  );
}
