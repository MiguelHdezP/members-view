import React from "react";
import "./NotificationsPane.scss";

export const NotificationsPane = ({ children, customClass = "" }) => {
  return <div className={`notify-pane ${customClass}`}>{children}</div>;
};
