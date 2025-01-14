import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <section className='mx-auto grid max-w-screen-xl content-center gap-6 p-6 py-16 sm:grid-cols-2'>
      <section className='flex flex-col justify-center gap-2'>
        <h2 className='text-xl font-semibold'>
          Forma parte de nuestra comunidad
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quasi
          sequi ex sed dolores ut fugit, at dolorum modi ab!
        </p>
      </section>
      <section>{children}</section>
    </section>
  );
}
