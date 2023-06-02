import React from "react";
import "./Breadcrumb.scss";
import { FiChevronLeft } from "react-icons/fi";
import { IconContext } from "react-icons";

export const Breadcrumb = ({
  text = "",
  href = "",
  title = "",
  activateOnClick = false,
  onClickFn,
  customClass = "",
}) => {
  return activateOnClick ? (
    <div className={`breadcrumb-anchor ${customClass}`} onClick={onClickFn}>
      <IconContext.Provider
        value={{
          className: "breadcrumb-chevron",
        }}
      >
        <FiChevronLeft />
      </IconContext.Provider>
      {text}
    </div>
  ) : (
    <a href={href} title={title} className={`breadcrumb-anchor ${customClass}`}>
      <IconContext.Provider
        value={{
          className: "breadcrumb-chevron",
        }}
      >
        <FiChevronLeft />
      </IconContext.Provider>
      {text}
    </a>
  );
};
