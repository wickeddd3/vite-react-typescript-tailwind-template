import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "@/store/slices/auth/state";
import { registerThunk } from "@/store/slices/auth/thunks/auth";
import { authReducers } from "@/store/slices/auth/extra-reducers/auth";

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    authReducers(builder);
  },
});

export { registerThunk };

export default authSlice.reducer;
