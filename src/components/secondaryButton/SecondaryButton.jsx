import React from "react";
import "./SecondaryButton.scss";

export const SecondaryButton = ({
  text = "",
  fn = () => {},
  customClass = "",
}) => {
  return (
    <button className={`secondary-button ${customClass}`} onClick={() => fn()}>
      {text}
    </button>
  );
};
