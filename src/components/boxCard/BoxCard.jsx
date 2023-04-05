import React from "react";
import "./BoxCard.scss";

export const BoxCard = ({ children, customClass = "" }) => {
  return <div className={`box-card ${customClass}`}>{children}</div>;
};
