import React from "react";

export const MobileContainer = ({ children, className = "" }) => {
  return (
    <section className={`main-container ${className}`}>
      <div className="mobile-container">{children}</div>
    </section>
  );
};
