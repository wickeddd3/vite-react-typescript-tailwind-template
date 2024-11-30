import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/store/slices/auth/state";
import { registerThunk, loginThunk } from "@/store/slices/auth/thunks/auth";
import { authReducers } from "@/store/slices/auth/extra-reducers/auth";

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    authReducers(builder);
  },
});

export { registerThunk, loginThunk };

export default authSlice.reducer;
