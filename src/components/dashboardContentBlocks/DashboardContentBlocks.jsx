import React from "react";
import "./DashboardContentBlocks.scss";
import { Divider } from "../divider/Divider";

export const DashboardContentBlocks = ({
  dashContentTitle = "",
  dashContentDesc = "",
  children,
}) => {
  return (
    <div className="dashboard-contents-progress">
      <p className="text-title startS-title-text">{dashContentTitle}</p>
      {dashContentDesc.length ? (
        <p className="text-smallText">{dashContentDesc}</p>
      ) : (
        ""
      )}

      {children}
      <Divider customClass="divider-bottom" />
    </div>
  );
};
