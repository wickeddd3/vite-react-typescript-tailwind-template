export const getLocalStorageState = (name: string) =>
  window && window.localStorage.getItem(`${name}`);

export const removeLocalStorageState = (name: string) =>
  window && window.localStorage.removeItem(`${name}`);

export const setLocalStorageState = (name: string, value: string) =>
  window && window.localStorage.setItem(`${name}`, value);
