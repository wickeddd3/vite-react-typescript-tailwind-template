import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CategoriesState } from "@/store/slices/categories/types";
import {
  createCategoryThunk,
  deleteCategoryThunk,
  listCategoriesThunk,
  updateCategoryThunk,
} from "@/store/slices/categories/thunks/categories";
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
      const { data, meta } = action.payload;
      let categories = [];
      if (state.categories.initialized) {
        categories = Array.from(
          new Map(
            [...state.categories.data, ...data].map((item) => [item.id, item])
          ).values()
        );
      } else {
        categories = data;
      }
      handleFulfilled(state, "categories", categories);
      state.categories.initialized = true;
      state.categories.meta = meta;
    })
    .addCase(listCategoriesThunk.pending, (state) =>
      handlePending(state, "categories")
    )
    .addCase(listCategoriesThunk.rejected, (state) =>
      handleRejected(state, "categories")
    );

  // add category
  builder.addCase(createCategoryThunk.fulfilled, (state, action) => {
    const category = action.payload;
    const categories = [...state.categories.data];
    categories.unshift(category);
    state.categories.data = categories;
  });

  // update category
  builder.addCase(updateCategoryThunk.fulfilled, (state, action) => {
    const category = action.payload;
    const categories = [...state.categories.data];
    const categoryIndex = categories.findIndex(
      (item) => item.id === category.id
    );
    if (categoryIndex >= 0) {
      categories[categoryIndex] = category;
      state.categories.data = categories;
    }
  });

  // delete category
  builder.addCase(deleteCategoryThunk.fulfilled, (state, action) => {
    const id = action.payload;
    const categories = [...state.categories.data];
    const categoryIndex = categories.findIndex((item) => item.id === id);
    if (categoryIndex >= 0) {
      categories.splice(categoryIndex, 1);
      state.categories.data = categories;
    }
  });
};
