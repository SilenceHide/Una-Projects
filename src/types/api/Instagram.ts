import { ImageType } from "./Image";
import { EntityType } from "./Response";

export interface InstagramType {
  user: string;
  like: number;
  comment: number;
  createdAt: string;
  updatedAt: string;
  image: {
    data?: EntityType<ImageType>;
  };
}
