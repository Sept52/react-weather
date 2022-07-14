export const storage = {
  setItem: (name, item) => {
    localStorage.setItem(name, item);
  },
  getItem: (name) => {
    const item = localStorage.getItem(name);
    if (item) {
      return item;
    }
  },
};
