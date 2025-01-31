import { ComponentProps } from 'react';

export function WalletIcon({ ...rest }: ComponentProps<'path'>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22 9.16667V14.8333C22 18.2333 20 20.5 17 20.5H7C4 20.5 2 18.2333 2 14.8333V9.16667C2 6.084 3.64 3.93066 6.19 3.568C6.45 3.52266 6.72 3.5 7 3.5H17C17.26 3.5 17.51 3.51132 17.75 3.55665C20.33 3.89665 22 6.06133 22 9.16667Z'
        {...rest}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 17H11'
        {...rest}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M18 9.5H21.1429C21.6162 9.5 22 9.88376 22 10.3571V12.6429C22 13.1162 21.6162 13.5 21.1429 13.5H18C16.8954 13.5 16 12.6046 16 11.5C16 10.3954 16.8954 9.5 18 9.5Z'
        {...rest}
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
}
