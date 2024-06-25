import { ApiResponseType, BlogType } from "@/types";
import apiClient from "./config/ApiClient";

export async function getBlogsApiCall(): Promise<ApiResponseType<BlogType>> {
  return await apiClient.get("/blogs", {
    params: {
      populate: "image",
    },
  });
}
