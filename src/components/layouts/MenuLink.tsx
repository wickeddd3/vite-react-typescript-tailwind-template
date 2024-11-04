import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { MenuItem } from "@/components/layouts/types/menu.type";
import { Link } from "react-router-dom";

interface MenuLinkProps {
  item: MenuItem;
}

export const MenuLink = ({
  item: { title, url, icon: Icon },
}: MenuLinkProps) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link to={url || ""}>
          {Icon && <Icon />}
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
