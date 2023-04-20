import React from "react";
import "./SecondaryButton.scss";
import { FiPlus } from "react-icons/fi";

export const SecondaryButton = ({
  text = "",
  fn = () => {},
  customClass = "",
  icon = false,
}) => {
  return (
    <button className={`secondary-button ${customClass}`} onClick={() => fn()}>
      {icon ? (
        <span className="secondary-button-icon">
          <FiPlus />
        </span>
      ) : (
        ""
      )}
      {text}
    </button>
  );
};
