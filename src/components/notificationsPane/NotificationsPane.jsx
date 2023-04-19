import React, { useRef } from "react";
import "./NotificationsPane.scss";

export const NotificationsPane = ({
  children,
  customClass = "",
  customId = "",
  fn,
}) => {
  const containerRef = useRef(null);

  const closeMoreOptionsPanel = () => {
    let getClickedContainer = containerRef.current.getAttribute("data-panel");
    if (getClickedContainer === "more-options-panel") fn();
  };

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
