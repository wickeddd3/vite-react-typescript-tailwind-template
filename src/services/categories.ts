import { apiRequest } from "@/lib/axios";
import { CategorySchemaType } from "@/schema/category";
import { PaginatedQuery } from "@/types/table";
import { AxiosError } from "axios";

const baseUrl = "/api/categories";
const categoriesResource = apiRequest({ url: baseUrl });

export const list = async (params: PaginatedQuery) => {
  try {
    return await categoriesResource.get({ params });
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

export const update = async (data: CategorySchemaType, id: number) => {
  try {
    return await categoriesResource.put(data, { url: `${baseUrl}/${id}` });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const remove = async (id: number) => {
  try {
    return await categoriesResource.delete({ url: `${baseUrl}/${id}` });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};
