import { apiRequest } from "@/lib/axios";

const categoriesResource = apiRequest({ url: "/api/categories" });

export const listCategories = async () => {
  return await categoriesResource.get();
};
