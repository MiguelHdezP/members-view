import React from "react";
import "./Modal.scss";

export const Modal = ({ children, customClass = "" }) => {
  return <div className={`modal ${customClass}`}>{children}</div>;
};
