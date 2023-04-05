import React from "react";
import "./Footer.scss";
import { IconContext } from "react-icons";
import { MdHomeFilled } from "react-icons/md";
import { BsChatTextFill } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { FaEllipsisH } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <IconContext.Provider
        value={{
          style: { fontSize: "2rem" },
          className: "active-icon",
        }}
      >
        <div className="footer-contents">
          <span className="mobile-icon-effect ">
            {<MdHomeFilled />}
            <p className="footer-icon-text">Care Journey</p>
          </span>
          <span className="mobile-icon-effect ">
            {<BsChatTextFill />} <p className="footer-icon-text">Chats</p>
          </span>
          <span className="mobile-icon-effect ">
            {<IoCalendar />} <p className="footer-icon-text">Appointments</p>
          </span>
          <span className="mobile-icon-effect ">
            {<FaEllipsisH />} <p className="footer-icon-text">More</p>
          </span>
        </div>
      </IconContext.Provider>
    </footer>
  );
};
