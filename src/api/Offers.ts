import { ApiResponseType, OfferType } from "@/types";
import apiClient from "./config/ApiClient";

export async function getOffersApiCall(): Promise<ApiResponseType<OfferType>> {
  return await apiClient.get("/offers", {
    params: {
      populate: "*",
    },
  });
}
