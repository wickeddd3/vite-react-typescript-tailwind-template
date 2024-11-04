import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { MenuItem } from "@/components/layouts/types/menu.type";
import { Link } from "react-router-dom";

interface MenuCollapsibleProps {
  item: MenuItem;
}

export const MenuCollapsible = ({
  item: { title, isActive, items, icon: Icon },
}: MenuCollapsibleProps) => {
  return (
    <Collapsible
      key={title}
      asChild
      defaultOpen={isActive}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={title}>
            {Icon && <Icon />}
            <span>{title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items?.map(({ title: subTitle, url }) => (
              <SidebarMenuSubItem key={subTitle}>
                <SidebarMenuSubButton asChild>
                  <Link to={url || ""}>
                    <span>{subTitle}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};
