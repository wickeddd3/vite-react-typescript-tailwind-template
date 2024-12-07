import { apiRequest } from "@/lib/axios";
import { AxiosError } from "axios";

const categoriesResource = apiRequest({ url: "/api/categories" });

export const listCategories = async () => {
  try {
    return await categoriesResource.get();
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};
