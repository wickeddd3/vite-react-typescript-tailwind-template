import { ProductSchemaType } from "@/schema/product";

export type UpdateProductThunkPayloadType = {
  product: ProductSchemaType;
  id: number;
};
