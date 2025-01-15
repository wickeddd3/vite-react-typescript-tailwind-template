import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/store/slices/products/state";
import {
  listProductsThunk,
  createProductThunk,
  getProductThunk,
  updateProductThunk,
  deleteProductThunk,
} from "@/store/slices/products/thunks/products";
import { listCategoriesThunk } from "@/store/slices/products/thunks/product-options";
import { productsReducers } from "@/store/slices/products/extra-reducers/products";
import { productOptionsReducers } from "@/store/slices/products/extra-reducers/product-options";
import {
  selectProductReducer,
  setProductsMetaReducer,
} from "@/store/slices/products/reducers";

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    selectProduct: selectProductReducer,
    setProductsMeta: setProductsMetaReducer,
  },
  extraReducers(builder) {
    productsReducers(builder);
    productOptionsReducers(builder);
  },
});

export const { selectProduct, setProductsMeta } = productsSlice.actions;

export {
  listProductsThunk,
  createProductThunk,
  getProductThunk,
  updateProductThunk,
  deleteProductThunk,
  listCategoriesThunk,
};

export default productsSlice.reducer;
