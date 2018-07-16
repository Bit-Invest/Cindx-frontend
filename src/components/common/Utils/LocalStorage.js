export class LocalStorage {
  static setItem(key, value) {
    localStorage.setItem(key, value);
    return localStorage.getItem(key);
  }

  static getItem(key) {
    return localStorage.getItem(key);
  }

  static removeItem(key) {
    const item = LocalStorage.getItem(key);
    if (item) {
      localStorage.removeItem(key);
    } else {
      throw new Error(`No such item "${key}" in storage`);
    }
    return item;
  }

  static clear() {
    localStorage.clear();
  }
}
