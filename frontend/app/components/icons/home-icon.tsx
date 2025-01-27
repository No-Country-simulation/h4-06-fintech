import { ComponentProps } from 'react';

export function HomeIcon({ ...rest }: ComponentProps<'path'>) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.51699 2.36713L3.02533 5.86713C2.27533 6.45046 1.66699 7.69213 1.66699 8.63379V14.8088C1.66699 16.7421 3.24199 18.3255 5.17533 18.3255H14.8253C16.7587 18.3255 18.3337 16.7421 18.3337 14.8171V8.75046C18.3337 7.74213 17.6587 6.45046 16.8337 5.87546L11.6837 2.26713C10.517 1.45046 8.64199 1.49213 7.51699 2.36713Z'
        {...rest}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 14.9912V12.4912'
        {...rest}
        strokeWidth='1.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
