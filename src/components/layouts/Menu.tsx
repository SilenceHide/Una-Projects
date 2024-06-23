import React from "react";
import Icon from "../common/ui/Icon";
import SubMenu from "./SubMenu";
import { useQuery } from "@tanstack/react-query";
import { getMenuApiCall, getSubmenuApiCall } from "@/api/Menu";
import { EntityType, MenuItemType } from "@/types";

interface Props {
  navOpen: boolean;
}

export default function Menu({ navOpen }: Props) {
  const { data: menuData } = useQuery({
    queryKey: [getMenuApiCall.name],
    queryFn: () => getMenuApiCall(),
  });

  return (
    <ul
      className={`menu-list flex lg:gap-5 gap-8 flex-col md:items-center md:flex-row md:h-full tracking-[2px] md:tracking-[0px] xl:tracking-[2px]  ${
        navOpen ? "justify-between" : "justify-start"
      }`}
    >
      {menuData &&
        menuData.data.map((menuItemData, index) => {
          const subMenuData: Array<EntityType<MenuItemType>> = [];
          menuItemData.attributes.submenus.data.map((item) => {
            return subMenuData.push(item);
          });

          return (
            <li
              className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full lg:p-0 md:py-10"
              key={index}
            >
              <div className="menu-item_wrapper flex items-center gap-1 ">
                <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all duration-300 uppercase">
                  {menuItemData.attributes.title}
                </p>
                <Icon
                  iconName="i-chevrondown-icon"
                  size="text-[12px]"
                  className="menu-item_icon group-hover/menu-item:rotate-180 transition-all duration-300"
                />
              </div>

              <SubMenu subMenuData={subMenuData} />
            </li>
          );
        })}
    </ul>
  );
}
