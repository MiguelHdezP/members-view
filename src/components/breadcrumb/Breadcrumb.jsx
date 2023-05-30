import React from "react";
import "./Breadcrumb.scss";
import { FiChevronLeft } from "react-icons/fi";
import { IconContext } from "react-icons";

export const Breadcrumb = ({ text = "", href = "", title = "", fn }) => {
  return (
    <a
      href={href}
      title={title}
      className="breadcrumb-anchor"
      onClick={(e) => {
        e.preventDefault();
        fn();
      }}
    >
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
