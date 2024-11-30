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
  LoginSchemaType // Argument type for the thunk
>("authSlice/loginThunk", async (initialData: LoginSchemaType) => {
  const { data } = await login(initialData);
  return data ?? null;
});

export const getAuthUserThunk = createAsyncThunk<AuthUser>(
  "authSlice/getAuthUserThunk",
  async () => {
    const { data } = await getAuthUser();
    return data ?? null;
  }
);
