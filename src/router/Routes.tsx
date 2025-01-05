import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layouts/main-layout/MainLayout";
import { PageLoader } from "@/components/PageLoader";
import { GuestGuard } from "@/router/guards/GuestGuard";
import { AuthGuard } from "@/router/guards/AuthGuard";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const NotFound = lazy(() => import("@/pages/NotFound"));

const Login = lazy(() =>
  delay(500).then(() => import("@/pages/auth/login/Login"))
);
const Register = lazy(() =>
  delay(500).then(() => import("@/pages/auth/register/Register"))
);

const Dashboard = lazy(() =>
  delay(500).then(() => import("@/pages/dashboard/Dashboard"))
);
const Analytics = lazy(() =>
  delay(500).then(() => import("@/pages/analytics/Analytics"))
);
const Categories = lazy(() =>
  delay(500).then(() => import("@/pages/ecommerce/categories/Categories"))
);
const Products = lazy(() =>
  delay(500).then(() => import("@/pages/ecommerce/products/Products"))
);
const CreateProduct = lazy(() =>
  delay(500).then(() => import("@/pages/ecommerce/products/CreateProduct"))
);
const EditProduct = lazy(() =>
  delay(500).then(() => import("@/pages/ecommerce/products/EditProduct"))
);
const Users = lazy(() =>
  delay(500).then(() => import("@/pages/accounts/users/Users"))
);
const Roles = lazy(() =>
  delay(500).then(() => import("@/pages/accounts/roles/Roles"))
);

export const Routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <GuestGuard />,
        children: [
          {
            path: "login",
            element: (
              <PageLoader>
                <Login />
              </PageLoader>
            ),
          },
          {
            path: "register",
            element: (
              <PageLoader>
                <Register />
              </PageLoader>
            ),
          },
        ],
      },
      {
        element: <AuthGuard />,
        children: [
          {
            element: <MainLayout />,
            children: [
              {
                index: true, // This is the default route when the user visits "/"
                element: <Navigate to="/dashboard" replace />,
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
                children: [
                  {
                    path: "",
                    element: (
                      <PageLoader>
                        <Products />
                      </PageLoader>
                    ),
                  },
                  {
                    path: "create",
                    element: (
                      <PageLoader>
                        <CreateProduct />
                      </PageLoader>
                    ),
                  },
                  {
                    path: ":id/edit",
                    element: (
                      <PageLoader>
                        <EditProduct />
                      </PageLoader>
                    ),
                  },
                ],
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
        ],
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
