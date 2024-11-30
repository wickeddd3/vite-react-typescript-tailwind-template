import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/store/slices/auth/state";
import {
  registerThunk,
  loginThunk,
  getAuthUserThunk,
} from "@/store/slices/auth/thunks/auth";
import { authReducers } from "@/store/slices/auth/extra-reducers/auth";
import { setAuthTokenReducer } from "@/store/slices/auth/reducers";

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthToken: setAuthTokenReducer,
  },
  extraReducers(builder) {
    authReducers(builder);
  },
});

export const { setAuthToken } = authSlice.actions;

export { registerThunk, loginThunk, getAuthUserThunk };

export default authSlice.reducer;
