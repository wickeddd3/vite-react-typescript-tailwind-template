import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/components/layouts/main-layout/MainLayout";
import { PageLoader } from "@/components/PageLoader";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const NotFound = lazy(() => import("@/pages/NotFound"));
const Dashboard = lazy(() =>
  delay(1000).then(() => import("@/pages/dashboard/Dashboard"))
);
const Analytics = lazy(() =>
  delay(1000).then(() => import("@/pages/analytics/Analytics"))
);
const Categories = lazy(() =>
  delay(1000).then(() => import("@/pages/ecommerce/categories/Categories"))
);
const Products = lazy(() =>
  delay(1000).then(() => import("@/pages/ecommerce/products/Products"))
);
const Users = lazy(() =>
  delay(1000).then(() => import("@/pages/accounts/users/Users"))
);
const Roles = lazy(() =>
  delay(1000).then(() => import("@/pages/accounts/roles/Roles"))
);

export const AuthRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <PageLoader>
            <Dashboard />
          </PageLoader>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PageLoader>
            <Dashboard />
          </PageLoader>
        ),
      },
      {
        path: "analytics",
        element: (
          <PageLoader>
            <Analytics />
          </PageLoader>
        ),
      },
      {
        path: "categories",
        element: (
          <PageLoader>
            <Categories />
          </PageLoader>
        ),
      },
      {
        path: "products",
        element: (
          <PageLoader>
            <Products />
          </PageLoader>
        ),
      },
      {
        path: "users",
        element: (
          <PageLoader>
            <Users />
          </PageLoader>
        ),
      },
      {
        path: "roles",
        element: (
          <PageLoader>
            <Roles />
          </PageLoader>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <PageLoader>
        <NotFound />
      </PageLoader>
    ),
  },
]);
