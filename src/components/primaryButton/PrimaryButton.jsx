import React from "react";
import "./PrimaryButton.scss";

export const PrimaryButton = ({
  text = "",
  fn = () => {},
  customClass = "",
  disabled = false,
}) => {
  return (
    <button
      className={`primary-button ${customClass}`}
      onClick={() => fn()}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
