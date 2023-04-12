import React from "react";
import "./ProgressBar.scss";

export const ProgressBar = ({
  numPages = 0,
  customClassSingle = "",
  customClass = "",
  fn = () => {},
  activeState = [],
}) => {
  let widthPercentage = 100 / numPages - 1.1;

  const pagination = () => {
    let sections = [];
    for (let i = 0; i < numPages; i++) {
      sections.push(
        <span
          key={i}
          className={`progressBar-page ${customClassSingle} ${
            activeState[i] === i ? "progresBar-active" : ""
          }`}
          style={{ width: `${widthPercentage}%` }}
        ></span>
      );
    }
    return sections;
  };

  return (
    <div className={`progress-bar ${customClass}`}>
      {pagination().map((ele) => ele)}
    </div>
  );
};
