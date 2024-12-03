import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthUser, login, register } from "@/services/auth";
import { LoginSchemaType, RegisterSchemaType } from "@/schema/auth";
import { Auth } from "@/store/slices/auth/types";
import { AuthUser } from "@/types/auth";

export const registerThunk = createAsyncThunk<
  Auth, // Return type of the thunk
  RegisterSchemaType // Argument type for the thunk
>("authSlice/registerThunk", async (initialData: RegisterSchemaType) => {
  const { data } = await register(initialData);
  return data ?? null;
});

export const loginThunk = createAsyncThunk<
  Auth, // Return type of the thunk
  LoginSchemaType, // Argument type for the thunk
  { rejectValue: string }
>(
  "authSlice/loginThunk",
  async (initialData: LoginSchemaType, { rejectWithValue }) => {
    const { status, data } = await login(initialData);
    if (status === 200) {
      return data;
    }
    return rejectWithValue("Incorrect email or password");
  }
);

export const getAuthUserThunk = createAsyncThunk<
  AuthUser | null,
  void,
  { rejectValue: string }
>("authSlice/getAuthUserThunk", async (_, { rejectWithValue }) => {
  const { status, data } = await getAuthUser();
  if (status === 200) {
    return data;
  }
  return rejectWithValue(
    "Error occurred while fetching authenticated user data."
  );
});
