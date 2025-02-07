'use client';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  CloseIcon,
  HomeSidebarHeaderIcon,
  LevelIcon,
} from './svg/home-sidebar-header';

export function HomeSidebarHeader() {
  

  return (
    <SidebarHeader className='bg-[#E9EDF6] p-5'>
      <SidebarMenu className='flex flex-row justify-between'>
        <SidebarMenuItem>
          <HomeSidebarHeaderIcon />
        </SidebarMenuItem>
        <SidebarMenuItem>
          <button >
            <CloseIcon />
          </button>
        </SidebarMenuItem>
      </SidebarMenu>
      <div className='my-6 flex h-[43px] w-full max-w-[281px] flex-row items-center justify-center rounded-lg border border-[#004AAD] bg-[#004AAD4D]'>
        <span className='flex items-center gap-1 px-4 font-poppins-regular text-sm'>
          Estás en el nivel
          <span className='relative inline-flex h-6 w-6 items-center justify-center rounded-full text-[#004AAD]'>
            <LevelIcon /> <span className='z-10'>3</span>
          </span>
          ¡Seguí así!
        </span>
      </div>
    </SidebarHeader>
  );
}
