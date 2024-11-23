import { MainSidebar } from "@/components/layouts/main-layout/MainSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

export const MainLayout = () => {
  return (
    <SidebarProvider>
      <MainSidebar />
      <SidebarInset>
        <Outlet />
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
};
