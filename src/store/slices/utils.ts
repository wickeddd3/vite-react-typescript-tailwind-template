import { WritableDraft } from "immer";

// Define a generic interface for state items that will have a `loading` field
interface StateItem {
  loading: boolean;
  data?: unknown; // You can replace `any` with more specific types if needed
}

// Make the functions accept states that follow this structure
export const handlePending = <T, K extends keyof T>(
  state: WritableDraft<T>,
  key: K
): void => {
  const item = state[key] as WritableDraft<StateItem>; // Ensure the item has `loading`
  item.loading = true;
};

export const handleRejected = <T, K extends keyof T>(
  state: WritableDraft<T>,
  key: K
): void => {
  const item = state[key] as WritableDraft<StateItem>; // Ensure the item has `loading`
  item.loading = false;
};

export const handleFulfilled = <T, K extends keyof T>(
  state: WritableDraft<T>,
  key: K,
  payload: T[K] extends { data: unknown } ? T[K]["data"] : never
): void => {
  const item = state[key] as WritableDraft<StateItem>; // Ensure the item has `loading`
  item.data = payload;
  item.loading = false;
};
