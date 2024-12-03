import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { getAuthUserThunk } from "@/store/slices/auth";
import { AuthLoader } from "@/components/AuthLoader";
import { debounce } from "@/utils/delay";

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const dispatch: AppDispatch = useDispatch();

  const user = useSelector((state: RootState) => state.authSlice.auth?.user);

  const handleGetAuthUser = debounce(() => {
    dispatch(getAuthUserThunk());
  }, 1000);

  useEffect(() => {
    if (!user) handleGetAuthUser();
  }, [user, handleGetAuthUser]);

  return user ? children : <AuthLoader />;
};
