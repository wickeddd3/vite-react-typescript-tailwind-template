import { AppSidebar } from "@/components/layouts/main-layout/AppSidebar";
import { AppNavbar } from "@/components/layouts/main-layout/AppNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppNavbar />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};
