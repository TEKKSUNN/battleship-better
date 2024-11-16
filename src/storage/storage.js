export function storageSet(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function storageGet(key) {
  return JSON.parse(sessionStorage.getItem(key));
}
