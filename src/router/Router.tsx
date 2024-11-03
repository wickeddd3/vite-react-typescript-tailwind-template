import { RouterProvider } from "react-router-dom";
import { AuthRoutes } from "@/router/AuthRoutes";
import { GuestRoutes } from "@/router/GuestRoutes";

export const Router = ({ token = "" }: { token?: string }) => {
  if (token) {
    return <RouterProvider router={AuthRoutes} />;
  }
  return <RouterProvider router={GuestRoutes} />;
};
