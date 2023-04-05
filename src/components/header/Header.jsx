import React from "react";
import "./Header.scss";
import { Divider } from "../divider/Divider";
import { IconContext } from "react-icons";
import { FaUser } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-contents">
        <span className="header-icons-logo">LOGO</span>
        <IconContext.Provider
          value={{
            style: { fontSize: "1.3rem" },
            className: "active-icon",
          }}
        >
          <span className="mobile-icon-effect header-icon-user">
            <a href="#">{<FaUser />}</a>
          </span>
          <span className="mobile-icon-effect ">
            <a href="#">{<IoNotificationsSharp />}</a>
          </span>
        </IconContext.Provider>
      </div>
      <Divider />
    </header>
  );
};
