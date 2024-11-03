import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/components/layouts/main-layout/MainLayout";
import { PageLoader } from "@/components/PageLoader";

// Delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Create a lazy-loaded Login component with a delay
const Login = lazy(() => delay(1000).then(() => import("@/pages/auth/Login")));

export const GuestRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <PageLoader>
            <Login />
          </PageLoader>
        ),
      },
    ],
  },
]);
