import React from "react";
import "./BoxCard.scss";

export const BoxCard = ({ children, customClass = "", fn = () => {} }) => {
  return (
    <div className={`box-card ${customClass}`} onClick={() => fn()}>
      {children}
    </div>
  );
};
