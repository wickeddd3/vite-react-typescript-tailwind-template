import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Table,
  BookCopy,
  ChartColumn,
  ChartPie,
  LayoutPanelLeft,
  Folders,
} from "lucide-react";
import { MenuItem } from "@/components/layouts/types/menu.type";

export const user = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  avatar: "/avatars/shadcn.jpg",
};

export const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
];

export const menu: MenuItem[] = [
  {
    type: "MenuGroup",
    title: "",
    items: [
      {
        type: "MenuLink",
        title: "Dashboard",
        url: "/dashboard",
        icon: ChartPie,
      },
      {
        type: "MenuLink",
        title: "Analytics",
        url: "/analytics",
        icon: ChartColumn,
      },
    ],
  },
  {
    type: "MenuGroup",
    title: "Components",
    items: [
      {
        type: "MenuCollapsible",
        title: "Forms",
        icon: BookCopy,
        isActive: true,
        items: [
          {
            type: "MenuLink",
            title: "Contact",
            url: "/contact",
          },
          {
            type: "MenuLink",
            title: "Profile",
            url: "/profile",
          },
          {
            type: "MenuLink",
            title: "Product",
            url: "/product",
          },
        ],
      },
      {
        type: "MenuCollapsible",
        title: "Tables",
        icon: Table,
        items: [
          {
            type: "MenuLink",
            title: "List",
            url: "/list",
          },
          {
            type: "MenuLink",
            title: "DataTable",
            url: "/datatable",
          },
        ],
      },
    ],
  },
  {
    type: "MenuGroup",
    title: "App",
    items: [
      {
        type: "MenuLink",
        title: "Task Manager",
        url: "/",
        icon: LayoutPanelLeft,
      },
      {
        type: "MenuLink",
        title: "File Manager",
        url: "/",
        icon: Folders,
      },
    ],
  },
];
