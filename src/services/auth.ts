import { apiRequest } from "@/lib/axios";
import { RegisterSchemaType } from "@/schema/auth";

const baseUrl = "/api/auth";
const authResource = apiRequest({ url: "/api/auth" });

export const register = async (data: RegisterSchemaType) => {
  return await authResource.post(data, { url: `${baseUrl}/register` });
};
