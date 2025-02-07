import { logout } from '@/actions/logout/logout-action';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { HomeSidebarHeader } from './home-sidebar-header';
import { items, bottomItems } from './home-sidebar-items';
import { LogoutIcon } from './svg/bottom-items';
import Link from 'next/link';

const buttonStyle = 'border border-[#06040433]  h-[40px] focus:bg-[#004AAD80] ';
export function HomeSidebar() {
  return (
    <Sidebar className='w-full max-w-[291px]'>
      <HomeSidebarHeader />
      <SidebarContent className='bg-[#E9EDF6]'>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className='h-auto'
                    disabled
                  >
                    <Link
                      href={item.url}
                      className={`${buttonStyle} `}
                    >
                      <span className=''>
                        <item.icon />
                      </span>
                      <span className='text-lg/5 font-poppins-regular h-5'>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='bg-[#E9EDF6]'>
        <SidebarMenu>
          {bottomItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className='h-auto'
                disabled
              >
                <Link
                  href={item.url}
                  className={buttonStyle}
                >
                  <span className=''>
                    <item.icon />
                  </span>
                  <span className='text-lg/5 font-poppins-regular h-5'>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}

          <SidebarMenuItem>
            <form action={logout}>
              <SidebarMenuButton className={buttonStyle}>
                <span className='ml-1'>
                  <LogoutIcon />
                </span>
                <span className='text-lg/5 font-poppins-regular h-5'>Cerrar sesión</span>
              </SidebarMenuButton>
            </form>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
