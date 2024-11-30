import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { AuthState } from "@/store/slices/auth/types";
import { loginThunk, registerThunk } from "@/store/slices/auth/thunks/auth";

export const authReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  // register user
  builder.addCase(registerThunk.fulfilled, (state, action) => {
    const auth = action.payload || null;
    state.auth = auth;
  });

  // login user
  builder.addCase(loginThunk.fulfilled, (state, action) => {
    const auth = action.payload || null;
    state.auth = auth;
  });
};
