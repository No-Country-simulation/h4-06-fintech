import { ComponentProps } from 'react';

type Props = ComponentProps<'section'>;

export function TickerContent({ ...props }: Props) {
  return (
    <section
      className='flex w-fit items-center gap-9'
      {...props}
    ></section>
  );
}
