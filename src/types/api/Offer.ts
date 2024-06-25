import { ImageType } from "./Image";
import { EntityType } from "./Response";

export interface OfferType {
  title: string;
  price: number;
  sale_price: number;
  label: string;
  createdAt: string;
  updatedAt: string;
  image: {
    data?: EntityType<ImageType>;
  };
  center_image: {
    data?: EntityType<ImageType>;
  };
}
