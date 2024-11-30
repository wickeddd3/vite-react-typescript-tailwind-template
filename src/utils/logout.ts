import { tokenName } from "@/config/app.config";
import { removeLocalStorageState } from "@/utils/local-storage";

export const logout = () => {
  // remove token from local storage
  removeLocalStorageState(tokenName);
  // reload and redirect to homepage
  const hostUrl = `${window.location.protocol}//${window.location.host}`;
  window.location.href = hostUrl;
};
