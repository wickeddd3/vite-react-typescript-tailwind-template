import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/store/slices/products/state";
import {
  listProductsThunk,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
} from "@/store/slices/products/thunks/products";
import { productsReducers } from "@/store/slices/products/extra-reducers/products";
import { selectProductReducer } from "@/store/slices/products/reducers";

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    selectProduct: selectProductReducer,
  },
  extraReducers(builder) {
    productsReducers(builder);
  },
});

export const { selectProduct } = productsSlice.actions;

export {
  listProductsThunk,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
};

export default productsSlice.reducer;
