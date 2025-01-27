import { PropsWithChildren } from 'react';

export default function layout({ children }: PropsWithChildren) {
  return <section className='relative h-full'>{children}</section>;
}
