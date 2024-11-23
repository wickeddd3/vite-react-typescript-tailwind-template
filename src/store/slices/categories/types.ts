import { Category } from "@/types/ecommerce";

export type CategoriesState = {
  selectedCategory: Category | null;
  categories: {
    data: Category[];
    loading: boolean;
  };
};
