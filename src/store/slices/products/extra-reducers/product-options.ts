import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ProductsState } from "@/store/slices/products/types";
import { listCategoriesThunk } from "@/store/slices/products/thunks/product-options";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "@/store/slices/utils";

export const productOptionsReducers = (
  builder: ActionReducerMapBuilder<ProductsState>
) => {
  // list categories
  builder
    .addCase(listCategoriesThunk.fulfilled, (state, action) => {
      const { data } = action.payload;
      handleFulfilled(state, "optionCategories", data);
    })
    .addCase(listCategoriesThunk.pending, (state) =>
      handlePending(state, "optionCategories")
    )
    .addCase(listCategoriesThunk.rejected, (state) =>
      handleRejected(state, "optionCategories")
    );
};
