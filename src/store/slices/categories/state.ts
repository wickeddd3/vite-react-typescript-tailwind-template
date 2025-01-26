import { CategoriesState } from "@/store/slices/categories/types";

export const initialState: CategoriesState = {
  selectedCategory: null,
  categories: {
    data: [],
    loading: false,
    initialized: false,
    meta: {
      page: 1,
      size: 10,
      total: 0,
      totalPages: 1,
      orderBy: "createdAt",
      order: "desc",
    },
  },
};
