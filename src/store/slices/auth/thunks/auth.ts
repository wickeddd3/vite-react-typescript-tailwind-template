import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthUser, login, register } from "@/services/auth";
import { LoginSchemaType, RegisterSchemaType } from "@/schema/auth";
import { Auth } from "@/store/slices/auth/types";
import { AuthUser } from "@/types/auth";

export const registerThunk = createAsyncThunk<
  Auth, // Return type of the thunk
  RegisterSchemaType, // Argument type for the thunk
  { rejectValue: string }
>(
  "authSlice/registerThunk",
  async (initialData: RegisterSchemaType, { rejectWithValue }) => {
    const { status, data } = await register(initialData);
    if (status === 201) {
      return data;
    }
    const errorMessage =
      data?.message || "Error occurred while creating your account";
    return rejectWithValue(errorMessage);
  }
);

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
