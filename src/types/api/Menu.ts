import { MenuItemType } from "./MenuItem";
import { PopulateType } from "./Response";

export interface MenuType {
  title: string;
  createdAt: string;
  updatedAt: string;
  submenus: PopulateType<MenuItemType>;
}
