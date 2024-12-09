import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/store/slices/categories/state";
import {
  listCategoriesThunk,
  createCategoryThunk,
  updateCategoryThunk,
} from "@/store/slices/categories/thunks/categories";
import { categoriesReducers } from "@/store/slices/categories/extra-reducers/categories";
import { selectCategoryReducer } from "@/store/slices/categories/reducers";

export const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    selectCategory: selectCategoryReducer,
  },
  extraReducers(builder) {
    categoriesReducers(builder);
  },
});

export const { selectCategory } = categoriesSlice.actions;

export { listCategoriesThunk, createCategoryThunk, updateCategoryThunk };

export default categoriesSlice.reducer;
