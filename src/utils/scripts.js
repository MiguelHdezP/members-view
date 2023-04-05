export const urlCatch = () => {
  let currentPath = window.location.pathname;
  if (currentPath.includes("memberview")) return true;
  else return false;
};
