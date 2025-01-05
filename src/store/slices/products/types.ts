import { Category, Product } from "@/types/ecommerce";

export type ProductsState = {
  selectedProduct: Product | null;
  products: {
    data: Product[];
    loading: boolean;
  };
  optionCategories: {
    data: Category[];
    loading: boolean;
  };
};
