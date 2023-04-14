import React from "react";
import "./LoaderSection.scss";

export const LoaderSection = ({ customClass = "" }) => {
  return <div className={`load-section ${customClass}`}></div>;
};
