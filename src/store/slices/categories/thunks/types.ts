import { CategorySchemaType } from "@/schema/category";

export type UpdateCategoryThunkPayloadType = {
  category: CategorySchemaType;
  id: number;
};
