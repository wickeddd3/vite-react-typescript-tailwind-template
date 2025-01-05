import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "@/components/ui/toaster";
import { getLocalStorageState } from "@/utils/local-storage";
import { tokenName } from "@/config/app.config";
import { AppDispatch } from "@/store";
import { setAuthToken } from "@/store/slices/auth";
import { Routes } from "@/router/Routes";
import { AlertDialogProvider } from "@/contexts/AlertDialogContext";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthToken(getLocalStorageState(tokenName)));
  }, [dispatch]);

  return (
    <>
      <AlertDialogProvider>
        <RouterProvider router={Routes} />
      </AlertDialogProvider>
      <Toaster />
    </>
  );
};

export default App;
