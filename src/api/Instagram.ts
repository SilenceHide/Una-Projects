import { ApiResponseType, InstagramType } from "@/types";
import apiClient from "./config/ApiClient";

export async function getInstagramApiCall(): Promise<ApiResponseType<InstagramType>> {
  return await apiClient.get("/instagrams", {
    params: {
      populate: "image",
    },
  });
}
