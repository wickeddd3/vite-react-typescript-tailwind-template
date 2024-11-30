import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { AuthState } from "@/store/slices/auth/types";
import { loginThunk, registerThunk } from "@/store/slices/auth/thunks/auth";
import { tokenName } from "@/config/app.config";
import { setLocalStorageState } from "@/utils/local-storage";

export const authReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  // register user
  builder.addCase(registerThunk.fulfilled, (state, action) => {
    const auth = action.payload || null;
    state.auth = auth;
    if (auth?.token) {
      setLocalStorageState(tokenName, auth?.token);
    }
  });

  // login user
  builder.addCase(loginThunk.fulfilled, (state, action) => {
    const auth = action.payload || null;
    state.auth = auth;
    if (auth?.token) {
      setLocalStorageState(tokenName, auth?.token);
    }
  });
};
