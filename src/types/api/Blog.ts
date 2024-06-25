import { ImageType } from "./Image";
import { EntityType } from "./Response";

export interface BlogType {
  title: string;
  createdAt: string;
  updatedAt: string;
  date: string;
  image: {
    data?: EntityType<ImageType>;
  };
}
