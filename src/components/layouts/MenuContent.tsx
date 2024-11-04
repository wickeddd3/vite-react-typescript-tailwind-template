import { MenuGroup } from "@/components/layouts/MenuGroup";
import { MenuItem } from "@/components/layouts/types/menu.type";

interface MenuContentProps {
  menu: MenuItem[];
}

export const MenuContent = ({ menu }: MenuContentProps) => {
  return (
    <>
      {menu.map(
        (menuItem) =>
          menuItem.type === "MenuGroup" && (
            <MenuGroup item={menuItem} key={menuItem.title} />
          )
      )}
    </>
  );
};
