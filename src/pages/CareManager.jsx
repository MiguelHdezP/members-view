import React from "react";
import "./Pages.scss";

export const CareManager = () => {
  return (
    <div className="iframe-figma">
      {
        <iframe
          frameBorder="0"
          style={{
            overflow: "hidden",
            overflowX: "hidden",
            overflowY: "hidden",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
          height="100%"
          width="100%"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnvsoDm7b543OH6MVVKeg39%2F%25E2%25AD%2590%25EF%25B8%258FACM-Gotham-Designs%3Fnode-id%3D5201-208442%26scaling%3Dmin-zoom%26page-id%3D5201%253A207724%26starting-point-node-id%3D5201%253A208442%26show-proto-sidebar%3D1"
          allowFullScreen
          title="Care Manager"
        ></iframe>
      }
    </div>
  );
};
