import { apiRequest } from "@/lib/axios";
import { LoginSchemaType, RegisterSchemaType } from "@/schema/auth";
import { AxiosError } from "axios";

const baseUrl = "/api/auth";
const authResource = apiRequest({ url: "/api/auth" });

export const register = async (data: RegisterSchemaType) => {
  try {
    return await authResource.post(data, { url: `${baseUrl}/register` });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const login = async (data: LoginSchemaType) => {
  try {
    return await authResource.post(data, { url: `${baseUrl}/login` });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getAuthUser = async () => {
  return await authResource.get({ url: `${baseUrl}/me` });
};
