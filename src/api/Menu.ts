import apiClient from "./config/ApiClient";

export async function getMenuApiCall() {
  return await apiClient.get("/menus", {
    params: {
      populate: "*",
    },
  });
}

export async function getSubmenuApiCall() {
  return await apiClient.get("/menu-items", {
    params: {
      populate: "*",
    },
  });
}
