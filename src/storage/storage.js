export function storageSet(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function storageGet(key, constructorFn) {
  const data = JSON.parse(sessionStorage.getItem(key));
  if (!data) return null;

  if (constructorFn) {
    // Recreate the class instance
    const instance = new constructorFn();
    Object.assign(instance, data); // Copy data properties to the new instance
    return instance;
  }

  return data;
}
