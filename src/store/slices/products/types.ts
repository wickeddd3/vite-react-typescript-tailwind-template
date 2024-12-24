import { Product } from "@/types/ecommerce";

export type ProductsState = {
  selectedProduct: Product | null;
  products: {
    data: Product[];
    loading: boolean;
  };
};
