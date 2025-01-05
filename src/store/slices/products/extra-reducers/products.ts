import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ProductsState } from "@/store/slices/products/types";
import {
  listProductsThunk,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
  getProductThunk,
} from "@/store/slices/products/thunks/products";
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from "@/store/slices/utils";

export const productsReducers = (
  builder: ActionReducerMapBuilder<ProductsState>
) => {
  // list products
  builder
    .addCase(listProductsThunk.fulfilled, (state, action) => {
      const { data } = action.payload;
      handleFulfilled(state, "products", data);
    })
    .addCase(listProductsThunk.pending, (state) =>
      handlePending(state, "products")
    )
    .addCase(listProductsThunk.rejected, (state) =>
      handleRejected(state, "products")
    );

  // add product
  builder.addCase(createProductThunk.fulfilled, (state, action) => {
    const product = action.payload;
    const products = [...state.products.data];
    products.unshift(product);
    state.products.data = products;
  });

  // get product
  builder.addCase(getProductThunk.fulfilled, (state, action) => {
    const product = action.payload;
    state.selectedProduct = product;
  });

  // update product
  builder.addCase(updateProductThunk.fulfilled, (state, action) => {
    const product = action.payload;
    const products = [...state.products.data];
    const productIndex = products.findIndex((item) => item.id === product.id);
    if (productIndex >= 0) {
      products[productIndex] = product;
      state.products.data = products;
    }
  });

  // delete product
  builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
    const id = action.payload;
    const products = [...state.products.data];
    const productIndex = products.findIndex((item) => item.id === id);
    if (productIndex >= 0) {
      products.splice(productIndex, 1);
      state.products.data = products;
    }
  });
};
