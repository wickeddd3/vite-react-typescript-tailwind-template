import { createAsyncThunk } from "@reduxjs/toolkit";
import { list } from "@/services/categories";

export const listCategoriesThunk = createAsyncThunk(
  "productsSlice/listCategoriesThunk",
  async () => {
    const response = await list({
      page: 1,
      size: 100,
      orderBy: "createdAt",
      order: "desc",
    });
    return response?.data;
  }
);
