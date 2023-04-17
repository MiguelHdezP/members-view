export const urlCatch = (testUrlPage = "") => {
  let currentPath = window.location.pathname;
  if (currentPath.includes(testUrlPage)) return true;
  else return false;
};

export const redirect = (page, time = 50) => {
  setTimeout(() => {
    window.location.href = page;
  }, time);
};

export const currentWindowsWidth = () => {
  return window.screen.availWidth;
};
