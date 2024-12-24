import { configureStore } from "@reduxjs/toolkit";
import { ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from "@/store/slices/auth";
import categoriesSlice from "@/store/slices/categories";
import productsSlice from "@/store/slices/products";

export const store = configureStore({
  reducer: {
    authSlice,
    categoriesSlice,
    productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
