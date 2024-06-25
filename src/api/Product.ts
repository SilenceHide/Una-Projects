import { ApiResponseType, ProductType } from "@/types";
import apiClient from "./config/ApiClient";

export async function getProductsApiCall(): Promise<ApiResponseType<ProductType>> {
  return await apiClient.get("/products", {
    params: {
      populate: "*",
    },
  });
}
