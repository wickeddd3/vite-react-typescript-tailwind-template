import { Category } from "@/types/ecommerce";
import { Meta } from "@/types/table";

export type CategoriesState = {
  selectedCategory: Category | null;
  categories: {
    data: Category[];
    loading: boolean;
    initialized: boolean;
    meta: Meta;
  };
};
