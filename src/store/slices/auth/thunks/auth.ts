import { createAsyncThunk } from "@reduxjs/toolkit";
import { register } from "@/services/auth";
import { RegisterSchemaType } from "@/schema/auth";
import { Auth } from "@/store/slices/auth/types";

export const registerThunk = createAsyncThunk<
  Auth, // Return type of the thunk
  RegisterSchemaType // Argument type for the thunk
>("authSlice/registerThunk", async (initialData: RegisterSchemaType) => {
  const { data } = await register(initialData);
  return data ?? null;
});
