import React from "react";
import "./ProgressPercentage.scss";

export const ProgressPercentage = ({
  progressLabel = "",
  value = 0,
  max = 100,
}) => {
  return (
    <div className="progress-percentage">
      <label
        htmlFor="progress"
        className="text-midText progressPercentage-title"
      >
        {progressLabel}
      </label>
      <div className="progressPercentage-container">
        <span className="text-smallText progressPercentage-label">{`${value}%`}</span>
        <progress id="progress" value={value} max={max}>
          15%
        </progress>
      </div>
    </div>
  );
};
