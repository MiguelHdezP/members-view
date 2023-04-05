import React from "react";
import "./Pages.scss";

export const JourneyBuilder = () => {
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
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnvsoDm7b543OH6MVVKeg39%2F%25E2%25AD%2590%25EF%25B8%258FACM-Gotham-Designs%3Fnode-id%3D4307-103807%26scaling%3Dmin-zoom%26page-id%3D3773%253A66988%26starting-point-node-id%3D3905%253A125368"
          allowFullScreen
        ></iframe>
      }
    </div>
  );
};
