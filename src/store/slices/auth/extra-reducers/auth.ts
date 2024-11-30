import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { AuthState } from "@/store/slices/auth/types";
import { registerThunk } from "@/store/slices/auth/thunks/auth";

export const authReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
  // register user
  builder.addCase(registerThunk.fulfilled, (state, action) => {
    const auth = action.payload || null;
    state.auth = auth;
  });
};
