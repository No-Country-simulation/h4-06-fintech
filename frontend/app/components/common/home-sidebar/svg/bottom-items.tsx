export function SettingsIcon() {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z'
        stroke='black'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1 11.8799V10.1199C1 9.07994 1.85 8.21994 2.9 8.21994C4.71 8.21994 5.45 6.93994 4.54 5.36994C4.02 4.46994 4.33 3.29994 5.24 2.77994L6.97 1.78994C7.76 1.31994 8.78 1.59994 9.25 2.38994L9.36 2.57994C10.26 4.14994 11.74 4.14994 12.65 2.57994L12.76 2.38994C13.23 1.59994 14.25 1.31994 15.04 1.78994L16.77 2.77994C17.68 3.29994 17.99 4.46994 17.47 5.36994C16.56 6.93994 17.3 8.21994 19.11 8.21994C20.15 8.21994 21.01 9.06994 21.01 10.1199V11.8799C21.01 12.9199 20.16 13.7799 19.11 13.7799C17.3 13.7799 16.56 15.0599 17.47 16.6299C17.99 17.5399 17.68 18.6999 16.77 19.2199L15.04 20.2099C14.25 20.6799 13.23 20.3999 12.76 19.6099L12.65 19.4199C11.75 17.8499 10.27 17.8499 9.36 19.4199L9.25 19.6099C8.78 20.3999 7.76 20.6799 6.97 20.2099L5.24 19.2199C4.33 18.6999 4.02 17.5299 4.54 16.6299C5.45 15.0599 4.71 13.7799 2.9 13.7799C1.85 13.7799 1 12.9199 1 11.8799Z'
        stroke='black'
        strokeWidth='1.5'
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function HelpIcon() {
  return (
    <div className='relative inline-flex h-6 w-6 items-center justify-center'>
      <svg
        width='22'
        height='22'
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z'
          stroke='#060404'
          strokeWidth='1.5'
        />
      </svg>
      <span className='absolute text-sm font-semibold'>!</span>
    </div>
  );
}

export function LogoutIcon() {
  return (
    <svg
      width='10'
      height='21'
      viewBox='0 0 10 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9 1L1.7709 8.52955C1.25697 9.06485 1 9.78242 1 10.5C1 11.2176 1.25697 11.9351 1.7709 12.4704L9 20'
        stroke='#060404'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
}
