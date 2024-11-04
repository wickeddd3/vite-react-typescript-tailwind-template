import { MainSidebar } from "@/components/layouts/main-layout/MainSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <SidebarProvider>
      <MainSidebar />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};
