import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getLocalStorageState } from "@/utils/local-storage";
import { baseURL, tokenName } from "@/config/app.config";
import { logout } from "@/utils/logout";

type ApiRequestOptions = {
  url?: string;
  config?: AxiosRequestConfig;
};

type RequestData = Record<string, unknown> | FormData | null;

export const apiRequest = ({ url = "", config = {} }: ApiRequestOptions) => {
  const headers = {
    Accept: "application/json",
  };

  const http: AxiosInstance = axios.create({
    ...config,
    baseURL,
    headers,
  });

  // Request interceptor
  http.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const accessToken = getLocalStorageState(tokenName);
      if (accessToken) {
        config.headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  http.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { response } = error;
      if (response?.status === 401) {
        logout();
      }
      return Promise.reject(error);
    }
  );

  const httpRequest = (
    requestConfig: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> => {
    return http({
      url,
      ...config,
      ...requestConfig,
    });
  };

  const get = (
    requestConfig: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> => httpRequest({ method: "get", ...requestConfig });

  const post = (
    data: RequestData,
    requestConfig: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> =>
    httpRequest({ method: "post", data, ...requestConfig });

  const put = (
    data: RequestData,
    requestConfig: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> =>
    httpRequest({ method: "put", data, ...requestConfig });

  const patch = (
    data: RequestData,
    requestConfig: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> =>
    httpRequest({ method: "patch", data, ...requestConfig });

  const remove = (
    requestConfig: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> =>
    httpRequest({ method: "delete", ...requestConfig });

  return {
    get,
    post,
    put,
    patch,
    delete: remove,
  };
};

export default apiRequest;
