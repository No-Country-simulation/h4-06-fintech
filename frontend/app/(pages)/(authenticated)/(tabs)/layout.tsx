import { PropsWithChildren } from 'react';
import { Header } from './_components/header';

export default function layout({ children }: PropsWithChildren) {
  return (
    <section className='grid min-h-dvh pt-[78px]'>
      <Header />
      <section className='mx-auto w-full max-w-screen-2xl p-12 sm:p-24 sm:pt-28'>
        {children}
      </section>
    </section>
  );
}
