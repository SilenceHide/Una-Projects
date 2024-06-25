import { CategoryType } from "./Category";
import { ImageType } from "./Image";
import { EntityType } from "./Response";

export interface ProductType {
  title: string;
  price: number;
  sale_price?: number;
  label?: string;
  rate: number;
  reviews: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  is_offer: boolean;
  image: {
    data?: Array<EntityType<ImageType>>;
  };
  colors: Color[];
  categories: CategoryType;
}

export interface Color {
  id: number;
  color: string;
}
