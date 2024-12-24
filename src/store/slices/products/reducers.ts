import { PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "@/store/slices/products/types";
import { Product } from "@/types/ecommerce";

export const selectProductReducer = (
  state: ProductsState,
  action: PayloadAction<Product | null>
) => {
  state.selectedProduct = action.payload;
};
