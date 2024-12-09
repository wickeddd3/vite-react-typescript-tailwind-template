import { apiRequest } from "@/lib/axios";
import { CategorySchemaType } from "@/schema/category";
import { AxiosError } from "axios";

const baseUrl = "/api/categories";
const categoriesResource = apiRequest({ url: baseUrl });

export const list = async () => {
  try {
    return await categoriesResource.get();
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const create = async (data: CategorySchemaType) => {
  try {
    return await categoriesResource.post(data);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};
