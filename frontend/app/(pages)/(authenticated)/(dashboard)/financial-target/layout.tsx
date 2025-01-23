import { PropsWithChildren } from 'react';
import { CreateTargetButton } from './_components/create-target-button';

export default function layout({ children }: PropsWithChildren) {
  return (
    <section className='relative h-full'>
      {children}
      <CreateTargetButton />
    </section>
  );
}
