import React from "react";
import "./BoxCard.scss";

export const BoxCard = ({
  setNewNotiAsmt,
  children,
  customClass = "",
  id = 0,
  fn = (id) => {},
  setEduActive = (val) => {},
  prov = false,
}) => {
  const handleFn = (id) => {
    if (id === 3) {
      setNewNotiAsmt(true);
    } else if (id === 2) {
      setNewNotiAsmt(false);
    }
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
      style={prov ? { marginTop: "-1rem" } : {}}
    >
      {children}
    </div>
  );
};
