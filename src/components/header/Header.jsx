import React, { useState } from "react";
import "./Header.scss";
import { IconContext } from "react-icons";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotificationsSharp } from "react-icons/io5";
import { NotificationsPane } from "../../components/notificationsPane/NotificationsPane";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { ListWithIcons } from "../../components/listWithIcons/ListWithIcons";

export const Header = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleHambActive, setToggleHambActive] = useState(false);
  const [toggleActivPane, setToggleActivPane] = useState(false);

  const notificationsPane = () => {
    if (toggleNotifActive) setToggleNotifActive(false);
    setToggleActivPane(!toggleActivPane);
  };

  const notifications = () => {
    if (toggleHambActive) setToggleHambActive(!toggleHambActive);
    setToggleNotifActive(!toggleNotifActive);
  };

  const hamburguer = () => {
    if (toggleNotifActive) setToggleNotifActive(!toggleNotifActive);
    setToggleHambActive(!toggleHambActive);
  };

  return (
    <>
      <NotificationsPane
        customClass={toggleNotifActive ? "open-activity " : ""}
      >
        <SectionHeader title="Activity" fn={notificationsPane} />
        <ListWithIcons />
      </NotificationsPane>
      <NotificationsPane customClass={toggleHambActive ? "open-activity " : ""}>
        Hambus
      </NotificationsPane>
      <header className="header">
        <div className="header-contents">
          <span className="header-icons-logo">LOGO</span>
          <IconContext.Provider
            value={{
              style: { fontSize: "1.3rem" },
              className: "active-icon",
            }}
          >
            <button
              className={`mobile-icon-effect header-icon-notif ${
                toggleNotifActive ? "activate-icons" : ""
              }`}
              onClick={() => notifications()}
            >
              <span className="mobile-icon-new"></span>
              {<IoNotificationsSharp />}
            </button>
            <button
              className={`mobile-icon-effect  ${
                toggleHambActive ? "activate-icons" : ""
              }`}
              onClick={() => hamburguer()}
            >
              {<RxHamburgerMenu />}
            </button>
          </IconContext.Provider>
        </div>
      </header>
    </>
  );
};
