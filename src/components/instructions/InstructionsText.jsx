import React from "react";
import "./InstructionsText.scss";

export const InstructionsText = ({ text = "" }) => {
  return <p className="instructions">{text}</p>;
};
