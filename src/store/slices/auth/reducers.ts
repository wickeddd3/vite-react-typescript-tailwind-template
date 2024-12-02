import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@/store/slices/auth/types";

export const setAuthTokenReducer = (
  state: AuthState,
  action: PayloadAction<string | null>
) => {
  state.auth.token = action.payload;
};
