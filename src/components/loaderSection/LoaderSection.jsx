import React from "react";
import "./LoaderSection.scss";
import PulseLoader from "react-spinners/ClipLoader";

const override: React.CSSProperties = {
  borderWidth: "0.4rem",
  width: "5rem",
  height: "5rem",
};

export const LoaderSection = ({ customClass = "" }) => {
  return (
    <div className={`load-section ${customClass}`}>
      <div className="load-section-loader">
        <PulseLoader cssOverride={override} color="#5c4bd3" />
      </div>
    </div>
  );
};
