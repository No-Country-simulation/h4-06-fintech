'use client';

import Image from 'next/image';
import { useState } from 'react';

export function NotificationBell() {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <button
      className='p-2'
      onClick={() => setIsActive(!isActive)}
    >
      <Image
        src={isActive ? `/svg/bell-fill.svg` : `/svg/bell.svg`}
        draggable={false}
        alt='bell icon'
        height={24}
        width={24}
      />
    </button>
  );
}
