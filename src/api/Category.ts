import { ApiResponseType, CategoryType } from "@/types";
import apiClient from "./config/ApiClient";

export async function getHomePageCategoriesApiCall(): Promise<ApiResponseType<CategoryType>> {
  return await apiClient.get("/categories", {
    params: {
      populate: "image",
      filters: {
        home_page: {
          $eq: true,
        },
      },
    },
  });
}
