import { createAsyncThunk } from "@reduxjs/toolkit";
import { create, list, remove, update } from "@/services/categories";
import { CategorySchemaType } from "@/schema/category";
import { Category } from "@/types/ecommerce";
import { UpdateCategoryThunkPayloadType } from "./types";
import { Meta, PaginatedQuery } from "@/types/table";

export const listCategoriesThunk = createAsyncThunk<
  { data: Category[]; meta: Meta },
  PaginatedQuery,
  { rejectValue: string }
>(
  "categoriesSlice/listCategoriesThunk",
  async (initialData: PaginatedQuery, { rejectWithValue }) => {
    const query = initialData;
    const { status, data } = await list(query);
    if (status === 200) {
      return data;
    }
    return rejectWithValue("Error occurred while fetching list of categories.");
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

export const deleteCategoryThunk = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>(
  "categoriesSlice/deleteCategoryThunk",
  async (initialData: number, { rejectWithValue }) => {
    const id = initialData;
    const { status } = await remove(id);
    if (status === 200) {
      return id;
    }
    return rejectWithValue("Error occurred while deleting category.");
  }
);
