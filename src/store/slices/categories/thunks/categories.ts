import { createAsyncThunk } from "@reduxjs/toolkit";
import { listCategories } from "@/services/categories";

export const listCategoriesThunk = createAsyncThunk(
  "files/listFilesThunk",
  async () => {
    const response = await listCategories();

    console.log(response);
    return response.data ?? [];
  }
);
