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
};

export const addFavorites = (num, setUglyRender, uglyRender) => {
  console.log("addFavorites");
  let getNewFavs = JSON.parse(sessionStorage.getItem("currentFavs")) ?? [];
  if (getNewFavs !== null) {
    sessionStorage.removeItem("currentFavs");
    if (!getNewFavs.some((e) => e === num)) {
      sessionStorage.setItem(
        "currentFavs",
        JSON.stringify([...getNewFavs, num])
      );
    } else {
      let removeRepeteadFavs = getNewFavs.filter((e) => e !== num);
      sessionStorage.setItem(
        "currentFavs",
        JSON.stringify([...removeRepeteadFavs])
      );
    }
  } else {
    sessionStorage.setItem("currentFavs", JSON.stringify([num]));
  }
  setUglyRender(!uglyRender);
};
