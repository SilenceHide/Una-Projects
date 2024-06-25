import { ApiResponseType, OfferType } from "@/types";
import apiClient from "./config/ApiClient";

export async function getProductsApiCall(): Promise<ApiResponseType<OfferType>> {
  return await apiClient.get("/products", {
    params: {
      populate: "*",
    },
  });
}
