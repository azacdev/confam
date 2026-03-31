import { SidebarProvider, SidebarInset } from "@confam/ui";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { Container } from "@confam/ui";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <Container className="px-4 lg:px-6 flex flex-col">{children}</Container>
      </SidebarInset>
    </SidebarProvider>
  );
}
