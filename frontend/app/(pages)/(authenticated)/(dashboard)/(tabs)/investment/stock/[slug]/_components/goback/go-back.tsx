'use client';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
export function GoBack() {
  const router = useRouter();
  const pathname = usePathname();

  const cleanPathname = () => {
    // Get the current path without query parameters
    const basePathname = pathname.split('/').slice(0, -1).join('/');
    router.push(basePathname);
  };
  return (
    <Button
      className='absolute -left-16 -top-24 flex h-9 w-9 items-center justify-center rounded-lg bg-muted'
      onClick={cleanPathname}
    >
      <svg
        width='12'
        height='24'
        viewBox='0 0 12 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>Ir atrás</title>

        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.4942 1.08996C11.9077 1.52646 11.8891 2.21554 11.4526 2.62906L2.95147 10.6827C2.57348 11.0408 2.38488 11.5183 2.38488 12C2.38488 12.4817 2.57348 12.9592 2.95147 13.3173L11.4526 21.3709C11.8891 21.7845 11.9077 22.4735 11.4942 22.91C11.0807 23.3465 10.3916 23.3652 9.95507 22.9516L1.45396 14.898C0.623218 14.1109 0.207459 13.0533 0.207459 12C0.20746 10.9467 0.623219 9.88906 1.45396 9.10204L9.95508 1.04836C10.3916 0.634835 11.0807 0.653459 11.4942 1.08996Z'
          fill='#060404'
        />
      </svg>
    </Button>
  );
}
