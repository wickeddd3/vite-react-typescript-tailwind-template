import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { debounce } from "@/utils/delay";
import { getAuthUserThunk } from "@/store/slices/auth";
import { AuthLoader } from "@/components/AuthLoader";
import { Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const dispatch: AppDispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state: RootState) => !!state.authSlice.auth?.user
  );

  const handleGetAuthUser = debounce(() => {
    dispatch(getAuthUserThunk());
  }, 1000);

  useEffect(() => {
    if (!isAuthenticated) handleGetAuthUser();
  }, [isAuthenticated, handleGetAuthUser]);

  if (!isAuthenticated) {
    return <AuthLoader />;
  }

  return <Outlet />;
};
