import { PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "@/store/slices/products/types";
import { Product } from "@/types/ecommerce";
import { Meta } from "@/types/table";

export const selectProductReducer = (
  state: ProductsState,
  action: PayloadAction<Product | null>
) => {
  state.selectedProduct = action.payload;
};

export const setProductsMetaReducer = (
  state: ProductsState,
  action: PayloadAction<Meta>
) => {
  state.products.meta = action.payload;
};
