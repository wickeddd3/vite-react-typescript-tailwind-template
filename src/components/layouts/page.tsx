import { ReactNode } from "react";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

export const Page = ({ children }: { children: ReactNode }) => {
  return <main className="w-full h-full">{children}</main>;
};

interface PageNavbarProps {
  title?: string;
  children?: ReactNode;
}

export const PageNavbar = ({ title, children }: PageNavbarProps) => {
  return (
    <header className="w-full flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="w-full h-full flex justify-between items-center gap-2 px-4">
        <div className="w-fit h-full flex-grow flex items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-md font-semibold">{title}</h1>
        </div>
        <div className="w-full h-full">{children}</div>
      </div>
    </header>
  );
};

export const PageContent = ({ children }: { children: ReactNode }) => {
  return <div className="w-full h-fit p-4 flex flex-col gap-4">{children}</div>;
};

export const PageBreadcrumb = ({ className }: { className?: string }) => {
  return (
    <Breadcrumb className={cn("h-full", className)}>
      <BreadcrumbList className="h-full">
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">App</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>Dashboard</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

Page.Navbar = PageNavbar;
Page.Content = PageContent;
Page.Breadcrumb = PageBreadcrumb;
