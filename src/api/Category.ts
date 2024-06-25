import apiClient from "./config/ApiClient";

export async function getHomePageCategoriesApiCall() {
  return await apiClient.get("/categories", {
    params: {
      populate: "thumbnail",
      filters: {
        home_page: {
          $eq: true,
        },
      },
    },
  });
}
