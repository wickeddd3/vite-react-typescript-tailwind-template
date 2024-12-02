import { RouterProvider } from "react-router-dom";
import { AuthRoutes } from "@/router/AuthRoutes";
import { GuestRoutes } from "@/router/GuestRoutes";

export const Router = ({ token = "" }: { token: string | null }) => {
  return <RouterProvider router={token ? AuthRoutes : GuestRoutes} />;
};
