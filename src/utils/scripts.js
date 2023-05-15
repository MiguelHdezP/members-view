export const urlCatch = (testUrlPage = "") => {
  let currentPath = window.location.pathname;
  if (currentPath.includes(testUrlPage)) return true;
  else return false;
};

export const urlGet = (testUrlPage = "") => {
  return testUrlPage === window.location.pathname;
};

export const urlGetQueryString = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get("q");
};

export const redirect = (page, time = 50) => {
  setTimeout(() => {
    window.location.href = page;
  }, time);
};

export const currentWindowsWidth = () => {
  return window.screen.availWidth;
};

export const firstScreenServeInfo = () => {
  const confirmPath = urlCatch("programOverview");
  // alert(confirmPath);
};
