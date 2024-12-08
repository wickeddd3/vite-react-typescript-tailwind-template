import { createAsyncThunk } from "@reduxjs/toolkit";
import { listCategories } from "@/services/categories";

export const listCategoriesThunk = createAsyncThunk(
  "categoriesSlice/listCategoriesThunk",
  async () => {
    const response = await listCategories();
    return response?.data;
  }
);
