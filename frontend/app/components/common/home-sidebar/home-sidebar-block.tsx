'use client';

import { usePathname } from 'next/navigation';

export function HomeSidebarBlock() {
  const path = usePathname();

  console.log({ path });

  if (path !== '/onboarding') {
    console.log('EJECUANDO ACA');
    return null;
  }

  console.log('EJECUANDO AYA');
  return (
    <div className='group absolute inset-0 z-50 flex items-center backdrop-blur-[4px]'>
      <p className='absolute -bottom-20 -translate-x-full text-center text-xs transition-transform group-hover:translate-x-0'>
        COMPLETA EL ONBOARDING PARA ACCEDER A TODAS LAS FUNCIONALIDADES
      </p>
    </div>
  );
}
