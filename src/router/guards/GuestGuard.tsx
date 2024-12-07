import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const GuestGuard = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => !!state.authSlice.auth?.token
  );

  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" replace />;
};
