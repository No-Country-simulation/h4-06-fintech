// import { HomeSidebar } from '@/components/common/home-sidebar/home-sidebar';
import { SidebarProvider } from "@/components/ui/sidebar";
import type { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
	return (
		<SidebarProvider>
			{/* <HomeSidebar /> */}
			<section className="w-full h-full">{children}</section>
		</SidebarProvider>
	);
}
