import React from "react";
import "./BoxCard.scss";

export const BoxCard = ({
  children,
  customClass = "",
  id = 0,
  fn = (id) => {},
  setEduActive = (val) => {},
}) => {
  const handleFn = (id) => {
    fn(id);
    if (id === 4) {
      setEduActive(true);
    } else {
      setEduActive(false);
    }
  };
  return (
    <div
      className={`box-card ${customClass}`}
      id={`js-tracker-boxcard-${id}`}
      onClick={() => handleFn(id)}
    >
      {children}
    </div>
  );
};
