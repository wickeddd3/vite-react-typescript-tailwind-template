import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/store/slices/auth";
import categoriesSlice from "@/store/slices/categories";
import { ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    categoriesSlice: categoriesSlice,
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
