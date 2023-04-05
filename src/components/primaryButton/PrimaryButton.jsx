import React from "react";
import "./PrimaryButton.scss";

export const PrimaryButton = ({
  text = "",
  fn = () => {},
  customClass = "",
}) => {
  return (
    <button className={`primary-button ${customClass}`} onClick={() => fn()}>
      {text}
    </button>
  );
};
