import { ProductsState } from "@/store/slices/products/types";

export const initialState: ProductsState = {
  selectedProduct: null,
  products: {
    data: [],
    loading: false,
  },
};
