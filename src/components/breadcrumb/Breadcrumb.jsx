import React from "react";
import "./Breadcrumb.scss";
import { FiChevronLeft } from "react-icons/fi";
import { IconContext } from "react-icons";

export const Breadcrumb = ({ text = "", href = "", title = "" }) => {
  return (
    <a href={href} title={title} className="breadcrumb-anchor">
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
