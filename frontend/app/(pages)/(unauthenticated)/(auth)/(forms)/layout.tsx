import Image from 'next/image';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <section className='mx-auto grid w-full max-w-screen-xl p-6 py-16 sm:grid-cols-2'>
      <section>{children}</section>
      <section className='flex items-center justify-center rounded-lg bg-primary'>
        <figure className='relative aspect-square w-full'>
          <Image
            alt="iupi's logo"
            src='/images/iupi-logo.png'
            className='p-20'
            fill
          />
        </figure>
      </section>
    </section>
  );
}
