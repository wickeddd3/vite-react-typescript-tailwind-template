import { Category, Product } from "@/types/ecommerce";
import { Meta } from "@/types/table";

export type ProductsState = {
  selectedProduct: Product | null;
  products: {
    data: Product[];
    loading: boolean;
    meta: Meta;
  };
  optionCategories: {
    data: Category[];
    loading: boolean;
  };
};
