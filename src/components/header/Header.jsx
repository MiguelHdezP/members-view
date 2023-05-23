import React, { useState } from "react";
import "./Header.scss";
import { IconContext } from "react-icons";
import { BsFillStarFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { NotificationsPane } from "../../components/notificationsPane/NotificationsPane";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { ListWithIcons } from "../../components/listWithIcons/ListWithIcons";
import { Divider } from "../../components/divider/Divider";
import { redirect } from "../../utils/scripts";
import { FakeFavorites } from "../header/FakeFavorites/FakeFavorites";

export const Header = ({
  favsState = [],
  addContentToFavs,
  customClass = "",
}) => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);

  const closePanel = () => {
    setToggleNotifActive(!toggleNotifActive);
  };

  const clearSessionStorage = () => {
    sessionStorage.clear();
    redirect("/dashboard?q=single");
  };

  return (
    <>
      <NotificationsPane customClass={toggleNotifActive ? "open-activity" : ""}>
        <SectionHeader title="Activity" fn={closePanel} />
        <ListWithIcons />
      </NotificationsPane>
      <FakeFavorites
        favsState={favsState}
        addContentToFavs={addContentToFavs}
        toggleFavs={toggleFavs}
      />
      <header className={`header ${customClass}`}>
        <div className="header-contents">
          <span
            className="header-icons-logo"
            onClick={() => clearSessionStorage()}
          >
            LOGO
          </span>
          <IconContext.Provider
            value={{
              style: { fontSize: "1.3rem" },
              className: "active-icon",
            }}
          >
            <button
              className={`mobile-icon-effect  ${
                toggleFavs ? "activate-icons" : ""
              }`}
              onClick={() => setToggleFavs(!toggleFavs)}
            >
              {<BsFillStarFill />}
            </button>
            <button
              className={`mobile-icon-effect`}
              onClick={() => redirect("/userSettings")}
            >
              {<FaUser />}
            </button>
            <button
              className={`mobile-icon-effect ${
                toggleNotifActive ? "activate-icons" : ""
              }`}
              onClick={() => setToggleNotifActive(!toggleNotifActive)}
            >
              <span className="mobile-icon-new"></span>
              {<IoNotificationsSharp />}
            </button>
          </IconContext.Provider>
        </div>
        <Divider />
      </header>
    </>
  );
};
