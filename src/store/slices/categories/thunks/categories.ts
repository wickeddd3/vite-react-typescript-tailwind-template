import { createAsyncThunk } from "@reduxjs/toolkit";
import { listCategories } from "@/services/categories";

export const listCategoriesThunk = createAsyncThunk(
  "files/listFilesThunk",
  async (_, { rejectWithValue }) => {
    const response = await listCategories();
    console.log(response);
    return rejectWithValue("Files not found");
  }
);
