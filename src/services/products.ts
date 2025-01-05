import { apiRequest } from "@/lib/axios";
import { ProductSchemaType } from "@/schema/product";
import { AxiosError } from "axios";

const baseUrl = "/api/products";
const productsResource = apiRequest({ url: baseUrl });

export const list = async () => {
  try {
    return await productsResource.get();
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const create = async (data: ProductSchemaType) => {
  try {
    return await productsResource.post(data);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const get = async (id: number) => {
  try {
    return await productsResource.get({ url: `${baseUrl}/${id}` });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const update = async (data: ProductSchemaType, id: number) => {
  try {
    return await productsResource.put(data, { url: `${baseUrl}/${id}` });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const remove = async (id: number) => {
  try {
    return await productsResource.delete({ url: `${baseUrl}/${id}` });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred");
  }
};
