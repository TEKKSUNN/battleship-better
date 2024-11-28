import { storageGet, storageSet } from "./storage";

const key = "place-status";

export const makePlaceStatusSuccess = () => storageSet(key, "success");
export const makePlaceStatusFailed = () => storageSet(key, "failed");

export const getPlaceStatus = () => storageGet(key);
