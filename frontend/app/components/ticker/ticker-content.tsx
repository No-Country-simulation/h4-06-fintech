import { ComponentProps } from 'react';

type Props = ComponentProps<'section'>;

export function TickerContent({ ...props }: Props) {
  return (
    <section
      className='flex items-center gap-9'
      {...props}
    ></section>
  );
}
