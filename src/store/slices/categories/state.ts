import { CategoriesState } from "@/store/slices/categories/types";

export const initialState: CategoriesState = {
  selectedCategory: null,
  categories: {
    data: [],
    loading: false,
  },
};
