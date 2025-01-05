import { createAsyncThunk } from "@reduxjs/toolkit";
import { create, get, list, remove, update } from "@/services/products";
import { ProductSchemaType } from "@/schema/product";
import { Product } from "@/types/ecommerce";
import { UpdateProductThunkPayloadType } from "./types";

export const listProductsThunk = createAsyncThunk(
  "productsSlice/listProductsThunk",
  async () => {
    const response = await list();
    return response?.data;
  }
);

export const createProductThunk = createAsyncThunk<
  Product,
  ProductSchemaType,
  { rejectValue: string }
>(
  "productsSlice/createProductThunk",
  async (initialData: ProductSchemaType, { rejectWithValue }) => {
    const { status, data } = await create(initialData);
    if (status === 201) {
      return data;
    }
    return rejectWithValue("Error occurred while creating product.");
  }
);

export const getProductThunk = createAsyncThunk<
  Product,
  number,
  { rejectValue: string }
>(
  "productsSlice/getProductThunk",
  async (initialData: number, { rejectWithValue }) => {
    const { status, data } = await get(initialData);
    if (status === 200) {
      return data;
    }
    return rejectWithValue("Error occurred while fetching product.");
  }
);

export const updateProductThunk = createAsyncThunk<
  Product,
  UpdateProductThunkPayloadType,
  { rejectValue: string }
>(
  "productsSlice/updateProductThunk",
  async (initialData: UpdateProductThunkPayloadType, { rejectWithValue }) => {
    const { product, id } = initialData;
    const { status, data } = await update(product, id);
    if (status === 200) {
      return data;
    }
    return rejectWithValue("Error occurred while updating product.");
  }
);

export const deleteProductThunk = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>(
  "productsSlice/deleteProductThunk",
  async (initialData: number, { rejectWithValue }) => {
    const id = initialData;
    const { status } = await remove(id);
    if (status === 200) {
      return id;
    }
    return rejectWithValue("Error occurred while deleting product.");
  }
);
