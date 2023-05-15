import React from "react";
import "./StatusFlag.scss";

export const StatusFlag = ({ flagLabel = "", classStatus = "" }) => {
  return (
    <span
      className={`boxcard-flag ${classStatus} text-smallText-flag reset-margin`}
    >
      {flagLabel}
    </span>
  );
};
