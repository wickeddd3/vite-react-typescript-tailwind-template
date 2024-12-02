import { Router } from "@/router/Router";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorageState } from "@/utils/local-storage";
import { tokenName } from "@/config/app.config";
import { AppDispatch, RootState } from "@/store";
import { setAuthToken } from "@/store/slices/auth";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  const token = useSelector((state: RootState) => state.authSlice.auth?.token);

  useEffect(() => {
    dispatch(setAuthToken(getLocalStorageState(tokenName)));
  }, [dispatch]);

  return (
    <>
      <Router token={token} />
      <Toaster />
    </>
  );
};

export default App;
