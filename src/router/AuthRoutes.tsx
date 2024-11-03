import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/components/layouts/main-layout";
import { PageLoader } from "@/components/PageLoader";

// const Dashboard = lazy(() => import("@/pages/Dashboard"));

// Delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Create a lazy-loaded Dashboard component with a delay
const Dashboard = lazy(() =>
  delay(1000).then(() => import("@/pages/Dashboard"))
);

export const AuthRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: (
          <PageLoader>
            <Dashboard />
          </PageLoader>
        ),
      },
    ],
  },
]);
