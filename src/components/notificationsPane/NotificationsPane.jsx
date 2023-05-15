import React, { useRef } from "react";
import "./NotificationsPane.scss";

export const NotificationsPane = ({
  children,
  customClass = "",
  customId = "",
  fn = () => {},
}) => {
  const containerRef = useRef(null);

  return (
    <div
      id={customId}
      className={`notify-pane ${customClass}`}
      onClick={() => fn()}
      ref={containerRef}
      data-panel="more-options-panel"
    >
      {children}
    </div>
  );
};
