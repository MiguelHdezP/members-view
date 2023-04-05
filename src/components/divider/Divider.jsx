import React from "react";
import "./Divider.scss";

export const Divider = ({ customClass = "" }) => {
  return <div className={`divider ${customClass}`}></div>;
};
