import React from "react";
import "./RoundedCard.scss";

export const RoundedCard = ({ children, customClass = "", fn = () => {} }) => {
  return (
    <div className={`rounded-card ${customClass}`} onClick={() => fn()}>
      {children}
    </div>
  );
};
