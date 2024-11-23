import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CategoriesState } from "@/store/slices/categories/types";
import { listCategoriesThunk } from "@/store/slices/categories/thunks/categories";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "@/store/slices/utils";

export const categoriesReducers = (
  builder: ActionReducerMapBuilder<CategoriesState>
) => {
  // list categories
  builder
    .addCase(listCategoriesThunk.fulfilled, (state, action) => {
      const categories = action.payload || [];
      const list = [...state.categories.data, ...categories];
      handleFulfilled(state, categories, list);
    })
    .addCase(listCategoriesThunk.pending, (state) =>
      handlePending(state, "categories")
    )
    .addCase(listCategoriesThunk.rejected, (state) =>
      handleRejected(state, "categories")
    );
};
