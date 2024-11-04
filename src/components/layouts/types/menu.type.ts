import { type LucideIcon } from "lucide-react";

export type MenuItemType = "MenuGroup" | "MenuCollapsible" | "MenuLink";

export type MenuItem = {
  type: MenuItemType;
  title: string;
  url?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: MenuItem[];
};
