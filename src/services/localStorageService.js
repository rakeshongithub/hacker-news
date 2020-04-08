let hours = 1; // 1hrs
const LocalStorageService = {
  expiry: hours,
  setItem: (key, value) => {
    localStorage.setItem(
      key,
      JSON.stringify({ value: value, expiry: new Date().getTime() })
    );
  },

  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },

  removeItem: (key) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};

export default LocalStorageService;
