import { createAsyncThunk } from "@reduxjs/toolkit";
import { create, list, update } from "@/services/categories";
import { CategorySchemaType } from "@/schema/category";
import { Category } from "@/types/ecommerce";
import { UpdateCategoryThunkPayloadType } from "./types";

export const listCategoriesThunk = createAsyncThunk(
  "categoriesSlice/listCategoriesThunk",
  async () => {
    const response = await list();
    return response?.data;
  }
);

export const createCategoryThunk = createAsyncThunk<
  Category,
  CategorySchemaType,
  { rejectValue: string }
>(
  "categoriesSlice/createCategoryThunk",
  async (initialData: CategorySchemaType, { rejectWithValue }) => {
    const { status, data } = await create(initialData);
    if (status === 201) {
      return data;
    }
    return rejectWithValue("Error occurred while creating category.");
  }
);

export const updateCategoryThunk = createAsyncThunk<
  Category,
  UpdateCategoryThunkPayloadType,
  { rejectValue: string }
>(
  "categoriesSlice/updateCategoryThunk",
  async (initialData: UpdateCategoryThunkPayloadType, { rejectWithValue }) => {
    const { category, id } = initialData;
    const { status, data } = await update(category, id);
    if (status === 200) {
      return data;
    }
    return rejectWithValue("Error occurred while updating category.");
  }
);
