export const urlCatch = () => {
  let currentPath = window.location.pathname;
  if (currentPath.includes("memberview")) return true;
  else return false;
};

export const redirect = (page, time = 50) => {
  setTimeout(() => {
    window.location.href = page;
  }, time);
};
