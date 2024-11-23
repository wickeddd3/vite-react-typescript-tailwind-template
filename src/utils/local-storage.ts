export const getLocalStorageState = (name: string) =>
  window && window.localStorage.getItem(`${name}`);

export const removeLocalStorageState = (name: string) =>
  window && window.localStorage.removeItem(`${name}`);
