import React from "react";
import { IconContext } from "react-icons";
import { BsTrophy } from "react-icons/bs";

export const BadgeTrophyOutline = () => {
  return (
    <IconContext.Provider
      value={{
        className: "asmt-trophy",
      }}
    >
      <span className="asmt-trophy-containerOut">
        <BsTrophy />
      </span>
    </IconContext.Provider>
  );
};
