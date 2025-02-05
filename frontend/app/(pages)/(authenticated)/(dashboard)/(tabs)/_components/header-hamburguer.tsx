'use client';

import { LucideMenu } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { LINKS } from '../_data/header-links';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';

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
      {createPortal(
        <AnimatePresence>
          {showMenu && (
            <motion.div
              id='hamburguer-menu'
              className='fixed inset-0 z-50 flex justify-end backdrop-blur-md'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.section
                ref={menuRef}
                className='bg-primary p-1 py-12 z-50 flex flex-col gap-12'
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: '0%', opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ stiffness: 120, damping: 15 }}
              >
                <p className='font-semibold text-background px-12'>Menu</p>
                <ul className='flex flex-col gap-1'>
                  {LINKS.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      className='rounded-md p-1 px-12 py-4 text-background hover:bg-background/20 flex gap-2'
                      onClick={() => setShowMenu(false)}
                    >
                      {link.value}
                    </Link>
                  ))}
                </ul>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>,
        document.querySelector('body')!,
      )}
    </>
  );
}
