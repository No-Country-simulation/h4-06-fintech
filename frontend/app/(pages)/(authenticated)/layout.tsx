import { HomeSidebar } from '@/components/common/home-sidebar/home-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { PropsWithChildren } from 'react';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <HomeSidebar />
      <section className='w-full p-12'>{children}</section>
    </SidebarProvider>
  );
}
