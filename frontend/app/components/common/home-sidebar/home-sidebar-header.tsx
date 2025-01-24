import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { backend } from '../../../../client-api/backend';

export async function HomeSidebarHeader() {
  const { email } = await backend.authApi.getProfile();

  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>{email}</SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
