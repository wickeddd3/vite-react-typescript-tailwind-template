import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  UserCog,
  ShoppingBag,
  ChartColumn,
  ChartPie,
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
    title: "Pages",
    items: [
      {
        type: "MenuCollapsible",
        title: "E-Commerce",
        icon: ShoppingBag,
        isActive: true,
        items: [
          {
            type: "MenuLink",
            title: "Categories",
            url: "/categories",
          },
          {
            type: "MenuLink",
            title: "Products",
            url: "/products",
          },
        ],
      },
      {
        type: "MenuCollapsible",
        title: "Accounts",
        icon: UserCog,
        items: [
          {
            type: "MenuLink",
            title: "Users",
            url: "/users",
          },
          {
            type: "MenuLink",
            title: "Roles",
            url: "/roles",
          },
        ],
      },
    ],
  },
];
