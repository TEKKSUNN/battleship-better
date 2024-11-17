import { storageGet, storageSet } from "./storage";

const key = "orientation";

// Toggles value of orientation in sessionStorage.
export function toggleOrientation() {
  storageSet(key, storageGet(key) === "HORIZONTAL" ? "VERTICAL" : "HORIZONTAL");
}

// Gets value of orientation
export const getOrientation = () => storageGet(key);

// Resets orientation value to "HORIZONTAL"
export const resetOrientation = () => storageSet(key, "HORIZONTAL");
