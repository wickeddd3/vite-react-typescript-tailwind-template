import { AuthUser } from "@/types/auth";

export type Auth = {
  user: AuthUser | null;
  token: string | null;
};

export type AuthState = {
  auth: Auth;
};
