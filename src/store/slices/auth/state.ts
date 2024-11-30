import { AuthState } from "@/store/slices/auth/types";

export const initialState: AuthState = {
  auth: {
    user: null,
    token: null,
  },
};
