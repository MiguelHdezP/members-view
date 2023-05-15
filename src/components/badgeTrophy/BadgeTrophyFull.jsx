import React from "react";
import { IconContext } from "react-icons";
import { BsFillTrophyFill } from "react-icons/bs";

export const BadgeTrophyFull = () => {
  return (
    <IconContext.Provider
      value={{
        className: "asmt-trophy",
      }}
    >
      <span className="asmt-trophy-container">
        <BsFillTrophyFill />
      </span>
    </IconContext.Provider>
  );
};
