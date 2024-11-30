import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { getAuthUserThunk } from "@/store/slices/auth";

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const dispatch: AppDispatch = useDispatch();

  const user = useSelector((state: RootState) => state.authSlice.auth?.user);

  useEffect(() => {
    dispatch(getAuthUserThunk());
  }, [dispatch]);

  return user ? children : "loading";
};
