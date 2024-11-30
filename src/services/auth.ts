import { apiRequest } from "@/lib/axios";
import { LoginSchemaType, RegisterSchemaType } from "@/schema/auth";

const baseUrl = "/api/auth";
const authResource = apiRequest({ url: "/api/auth" });

export const register = async (data: RegisterSchemaType) => {
  return await authResource.post(data, { url: `${baseUrl}/register` });
};

export const login = async (data: LoginSchemaType) => {
  return await authResource.post(data, { url: `${baseUrl}/login` });
};
