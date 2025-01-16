import { logout } from '@/actions/logout/logout-action';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { HomeSidebarBlock } from './home-sidebar-block';
import { HomeSidebarHeader } from './home-sidebar-header';
import { items } from './home-sidebar-items';

export function HomeSidebar() {
  return (
    <Sidebar>
      <HomeSidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <HomeSidebarBlock />
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className='h-auto'
                    disabled
                  >
                    <a href={item.url}>
                      <span className='flex aspect-square items-center justify-center rounded-xl bg-blue-600 p-2 text-blue-200'>
                        <item.icon />
                      </span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <form action={logout}>
              <SidebarMenuButton>Cerrar sesión</SidebarMenuButton>
            </form>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
