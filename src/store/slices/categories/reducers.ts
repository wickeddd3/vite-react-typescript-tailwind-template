import { PayloadAction } from "@reduxjs/toolkit";
import { CategoriesState } from "@/store/slices/categories/types";
import { Category } from "@/types/ecommerce";

export const selectCategoryReducer = (
  state: CategoriesState,
  action: PayloadAction<Category | null>
) => {
  state.selectedCategory = action.payload;
};
