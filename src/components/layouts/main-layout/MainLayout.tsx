import { MainSidebar } from "@/components/layouts/main-layout/MainSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AuthGuard } from "@/components/layouts/AuthGuard";

export const MainLayout = () => {
  return (
    <AuthGuard>
      <SidebarProvider>
        <MainSidebar />
        <SidebarInset>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  );
};
