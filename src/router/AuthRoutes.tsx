import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/components/layouts/main-layout/MainLayout";
import { PageLoader } from "@/components/PageLoader";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Dashboard = lazy(() =>
  delay(1000).then(() => import("@/pages/Dashboard"))
);
const Analytics = lazy(() =>
  delay(1000).then(() => import("@/pages/Analytics"))
);
const Contact = lazy(() =>
  delay(1000).then(() => import("@/pages/forms/Contact"))
);
const Profile = lazy(() =>
  delay(1000).then(() => import("@/pages/forms/Profile"))
);
const Product = lazy(() =>
  delay(1000).then(() => import("@/pages/forms/Product"))
);
const List = lazy(() => delay(1000).then(() => import("@/pages/tables/List")));
const DataTable = lazy(() =>
  delay(1000).then(() => import("@/pages/tables/DataTable"))
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
      {
        path: "/dashboard",
        element: (
          <PageLoader>
            <Dashboard />
          </PageLoader>
        ),
      },
      {
        path: "/analytics",
        element: (
          <PageLoader>
            <Analytics />
          </PageLoader>
        ),
      },
      {
        path: "/contact",
        element: (
          <PageLoader>
            <Contact />
          </PageLoader>
        ),
      },
      {
        path: "/profile",
        element: (
          <PageLoader>
            <Profile />
          </PageLoader>
        ),
      },
      {
        path: "/product",
        element: (
          <PageLoader>
            <Product />
          </PageLoader>
        ),
      },
      {
        path: "/list",
        element: (
          <PageLoader>
            <List />
          </PageLoader>
        ),
      },
      {
        path: "/datatable",
        element: (
          <PageLoader>
            <DataTable />
          </PageLoader>
        ),
      },
    ],
  },
]);
