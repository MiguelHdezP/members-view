import React from "react";
import "./LinkButton.scss";

export const LinkButton = ({
  text = "",
  fn = () => {},
  customClass = "",
  href = "#",
}) => {
  return (
    <a
      className={`link-button ${customClass}`}
      onClick={() => fn()}
      href={href}
    >
      {text}
    </a>
  );
};
