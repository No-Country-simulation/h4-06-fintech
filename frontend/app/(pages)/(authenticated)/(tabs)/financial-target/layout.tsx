import { PropsWithChildren } from 'react';
import { LayoutHeader } from './_components/layout-header';

export default function layout({ children }: PropsWithChildren) {
  return (
    <section className='flex flex-col gap-12'>
      <LayoutHeader />
      {children}
    </section>
  );
}
