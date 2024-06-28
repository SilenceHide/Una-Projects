import { ApiResponseType, ProductType } from "@/types";
import apiClient from "./config/ApiClient";

interface Props {
  filters?: {};
}

export async function getProductsApiCall({
  filters,
}: Props): Promise<ApiResponseType<ProductType>> {
  return await apiClient.get("/products", {
    params: {
      populate: "*",
      filters: filters,
    },
  });
}
