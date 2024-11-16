import { storageGet, storageSet } from "./storage";

const key = "orientation";

// Toggles value of orientation in sessionStorage.
export function toggleOrientation() {
  storageSet(key, storageGet(key) === "horizontal" ? "vertical" : "horizontal");
}

// Gets value of orientation
export const getOrientation = () => storageGet(key);
