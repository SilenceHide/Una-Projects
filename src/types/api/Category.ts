import { ImageType } from "./Image";
import { EntityType } from "./Response";

export interface CategoryType {
  title: string;
  createdAt: string;
  updatedAt: string;
  home_page?: boolean;
  image: {
    data?: EntityType<ImageType>;
  };
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
