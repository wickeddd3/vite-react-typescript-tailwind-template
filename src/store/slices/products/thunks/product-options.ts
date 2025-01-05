import { createAsyncThunk } from "@reduxjs/toolkit";
import { list } from "@/services/categories";

export const listCategoriesThunk = createAsyncThunk(
  "productsSlice/listCategoriesThunk",
  async () => {
    const response = await list();
    return response?.data;
  }
);
