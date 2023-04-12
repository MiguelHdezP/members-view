import React from "react";
import "./ChatBadges.scss";

export const ChatBadges = ({ customClass = "", children }) => {
  return <span className={`chat-badges ${customClass}`}>{children}</span>;
};
