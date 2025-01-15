import { ProductsState } from "@/store/slices/products/types";

export const initialState: ProductsState = {
  selectedProduct: null,
  products: {
    data: [],
    loading: false,
    meta: {
      page: 1,
      size: 10,
      total: 0,
      totalPages: 1,
    },
  },
  optionCategories: {
    data: [],
    loading: false,
  },
};
