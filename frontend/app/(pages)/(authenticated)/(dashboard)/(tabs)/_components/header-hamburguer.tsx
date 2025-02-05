'use client';

import { LucideMenu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy Load porque hace uso de "Document" que es solo
// disponible en el cliente
const LazySidebarMenu = dynamic(() =>
  import('./lazy-sidebar-menu').then((m) => m.LazySidebarMenu),
);

export function HeaderHamburguer() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <>
      <section className='block sm:hidden'>
        <button
          className='rounded-full bg-primary p-2'
          onClick={() => setShowMenu(true)}
        >
          <LucideMenu className='text-white' />
        </button>
      </section>
      <LazySidebarMenu
        showMenu={showMenu}
        ref={menuRef}
      />
    </>
  );
}
