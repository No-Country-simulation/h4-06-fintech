'use client';

import { Link } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react'; // ✅ Correct import
import { createPortal } from 'react-dom';
import { LINKS } from '../_data/header-links';
import { forwardRef } from 'react';
import { useHasMounted } from '@/hooks/use-hasmounted';

interface Props {
  showMenu: boolean;
}

// ✅ Use `forwardRef` to properly pass ref
export const LazySidebarMenu = forwardRef<HTMLElement, Props>(
  ({ showMenu }, ref) => {
    const hasMounted = useHasMounted();

    if (!hasMounted) return null;

    return createPortal(
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
              ref={ref} // ✅ Now ref works properly
              className='z-50 flex flex-col gap-12 bg-primary p-1 py-12'
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ stiffness: 120, damping: 15 }}
            >
              <p className='px-12 font-semibold text-background'>Menu</p>
              <ul className='flex flex-col gap-1'>
                {LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className='flex gap-2 rounded-md p-1 px-12 py-4 text-background hover:bg-background/20'
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
    );
  },
);

// ✅ Add display name to avoid issues in dev tools
LazySidebarMenu.displayName = 'LazySidebarMenu';
