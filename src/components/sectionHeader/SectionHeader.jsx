import React from "react";
import "./SectionHeader.scss";

export const SectionHeader = ({
  title = "",
  customClass = "",
  fn = () => {},
}) => {
  return (
    <header className={`section-header ${customClass}`}>
      <h1 className="section-header-title">{title}</h1>
      <button className="section-header-close" onClick={() => fn()}>
        X
      </button>
    </header>
  );
};
