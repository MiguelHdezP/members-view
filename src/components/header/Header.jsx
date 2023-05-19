import React, { useState } from "react";
import "./Header.scss";
import { IconContext } from "react-icons";
import { BsFillStarFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { NotificationsPane } from "../../components/notificationsPane/NotificationsPane";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import { ListWithIcons } from "../../components/listWithIcons/ListWithIcons";
import { Divider } from "../../components/divider/Divider";
import { redirect } from "../../utils/scripts";
import { BoxCard } from "../boxCard/BoxCard";
import { articleImg, articleImg2, videoImg } from "../../data/images";

export const Header = ({
  favsState = [],
  addContentToFavs = () => {
    return null;
  },
  customClass = "",
}) => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);

  const closePanel = () => {
    setToggleNotifActive(!toggleNotifActive);
  };

  const printCurrentFavs = (favsState) => {
    return favsState.map((el, i) => {
      let elements;
      switch (el) {
        case 4:
          elements = (
            <BoxCard customClass="favorites-cardContainer" key={i}>
              <IconContext.Provider
                value={{
                  className: "button-card-star",
                }}
              >
                <button
                  title="Remove from favorites"
                  className="button-card-favs header-card-favs"
                  onClick={() => addContentToFavs(4)}
                >
                  <AiFillStar />
                </button>
              </IconContext.Provider>
              <div
                className="favorites-card"
                onClick={() => redirect("/educationArticle")}
              >
                <img
                  src={articleImg}
                  alt="Article Care Program"
                  className="favorites-card-img"
                />
                <div className="favorites-card-texts">
                  <p className="text-midText favorites-semibold-text favorites-text-mid">
                    Article Title
                  </p>
                  <p className="text-smallText favorites-text-mid">
                    One line description
                  </p>
                </div>
              </div>
            </BoxCard>
          );
          break;
        case 5:
          elements = (
            <BoxCard customClass="favorites-cardContainer" key={i}>
              <IconContext.Provider
                value={{
                  className: "button-card-star",
                }}
              >
                <button
                  title="Remove from favorites"
                  className="button-card-favs header-card-favs"
                  onClick={() => addContentToFavs(5)}
                >
                  <AiFillStar />
                </button>
              </IconContext.Provider>
              <div
                className="favorites-card"
                onClick={() => redirect("/educationArticle")}
              >
                <img
                  src={articleImg2}
                  alt="Article Care Program"
                  className="favorites-card-img"
                />
                <div className="favorites-card-texts">
                  <p className="text-midText favorites-semibold-text favorites-text-mid">
                    Article Title
                  </p>
                  <p className="text-smallText favorites-text-mid">
                    One line description
                  </p>
                </div>
              </div>
            </BoxCard>
          );
          break;
        case 6:
          elements = (
            <BoxCard customClass="favorites-cardContainer" key={i}>
              <IconContext.Provider
                value={{
                  className: "button-card-star",
                }}
              >
                <button
                  title="Remove from favorites"
                  className="button-card-favs header-card-favs"
                  onClick={() => addContentToFavs(6)}
                >
                  <AiFillStar />
                </button>
              </IconContext.Provider>
              <div className="favorites-card">
                <img
                  src={videoImg}
                  alt="Video Care Program"
                  className="favorites-card-img"
                />
                <div className="favorites-card-texts">
                  <p className="text-midText favorites-semibold-text favorites-text-mid">
                    Video Title
                  </p>
                  <p className="text-smallText favorites-text-mid">
                    One line description
                  </p>
                </div>
              </div>
            </BoxCard>
          );
          break;
        default:
          break;
      }
      return elements;
    });
  };

  const clearSessionStorage = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <NotificationsPane customClass={toggleNotifActive ? "open-activity" : ""}>
        <SectionHeader title="Activity" fn={closePanel} />
        <ListWithIcons />
      </NotificationsPane>
      <NotificationsPane
        customClass={`header-pane ${toggleFavs ? "open-activity" : ""}`}
      >
        <div className="favorites">
          <p className="text-title favorites-title">Your Favorites</p>
          <p className="text-smallText favorites-text-widthMargin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
          {printCurrentFavs(favsState)}
        </div>
      </NotificationsPane>
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
