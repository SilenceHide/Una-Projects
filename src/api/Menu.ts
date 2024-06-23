import { ApiResponseType, MenuItemType, MenuType } from "@/types";
import apiClient from "./config/ApiClient";

export async function getMenuApiCall(): Promise<ApiResponseType<MenuType>> {
  return await apiClient.get("/menus", {
    params: {
      populate: "*",
    },
  });
}

export async function getSubmenuApiCall(): Promise<ApiResponseType<MenuItemType>> {
  return await apiClient.get("/menu-items", {
    params: {
      populate: "*",
    },
  });
}
