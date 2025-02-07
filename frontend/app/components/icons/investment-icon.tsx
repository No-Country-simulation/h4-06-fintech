import { ComponentProps } from 'react';

export function InvestmentIcon({ ...rest }: ComponentProps<'path'>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.4701 22.9898V11.1098C21.4701 9.9598 21.0001 9.5498 19.9101 9.5498H19.1401C18.0501 9.5498 17.5801 9.9598 17.5801 11.1098V22.9898'
        {...rest}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.9505 22.9898V14.3598C13.9505 13.2098 13.4805 12.7998 12.3905 12.7998H11.6105C10.5205 12.7998 10.0605 13.2098 10.0605 14.3598V22.9898'
        {...rest}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.39 22.9903V17.6303C6.39 16.4803 5.92 16.0703 4.83 16.0703H4.05C2.96 16.0703 2.5 16.4803 2.5 17.6303V23.0103'
        {...rest}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 22.9902H23'
        {...rest}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.49023 7.80977L20.5702 3.25977'
        {...rest}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.4698 6.63L20.8898 4.05C21.0435 3.7715 21.0804 3.44336 20.9922 3.13771C20.9041 2.83206 20.6982 2.57391 20.4198 2.42L17.8398 1'
        {...rest}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
