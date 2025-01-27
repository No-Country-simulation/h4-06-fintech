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
        d='M1 11.8794V10.1194C1 9.07945 1.85 8.21945 2.9 8.21945C4.71 8.21945 5.45 6.93945 4.54 5.36945C4.02 4.46945 4.33 3.29945 5.24 2.77945L6.97 1.78945C7.76 1.31945 8.78 1.59945 9.25 2.38945L9.36 2.57945C10.26 4.14945 11.74 4.14945 12.65 2.57945L12.76 2.38945C13.23 1.59945 14.25 1.31945 15.04 1.78945L16.77 2.77945C17.68 3.29945 17.99 4.46945 17.47 5.36945C16.56 6.93945 17.3 8.21945 19.11 8.21945C20.15 8.21945 21.01 9.06945 21.01 10.1194V11.8794C21.01 12.9194 20.16 13.7794 19.11 13.7794C17.3 13.7794 16.56 15.0594 17.47 16.6294C17.99 17.5394 17.68 18.6994 16.77 19.2194L15.04 20.2094C14.25 20.6794 13.23 20.3994 12.76 19.6094L12.65 19.4194C11.75 17.8494 10.27 17.8494 9.36 19.4194L9.25 19.6094C8.78 20.3994 7.76 20.6794 6.97 20.2094L5.24 19.2194C4.33 18.6994 4.02 17.5294 4.54 16.6294C5.45 15.0594 4.71 13.7794 2.9 13.7794C1.85 13.7794 1 12.9194 1 11.8794Z'
        stroke='#060404'
        strokeWidth='1.25'
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
