import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { MenuItem } from "@/components/layouts/types/menu.type";
import { MenuCollapsible } from "@/components/layouts/MenuCollapsible";
import { MenuLink } from "@/components/layouts/MenuLink";

interface MenuGroupProps {
  item: MenuItem;
}

export const MenuGroup = ({ item: { title, items } }: MenuGroupProps) => {
  return (
    <SidebarGroup>
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
      <SidebarMenu>
        {items?.map((item) => {
          switch (item.type) {
            case "MenuCollapsible":
              return <MenuCollapsible item={item} key={item.title} />;
            case "MenuLink":
              return <MenuLink item={item} key={item.title} />;
            default:
              return null;
          }
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};
