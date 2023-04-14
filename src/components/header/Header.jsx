import React, { useEffect, useState } from "react";
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
import { articleImg, dummyVideo, dummyImgArticle } from "../../data/images";

export const Header = ({
  toggleNotifActive = false,
  toggleFavs = false,
  toggleHeaderPanels,
  favsState = [],
  addContentToFavs,
}) => {
  const [toggleActivPane, setToggleActivPane] = useState(false);

  const closePanel = () => {
    if (toggleNotifActive) toggleHeaderPanels("notifi");
    setToggleActivPane(!toggleActivPane);
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
                <img src={articleImg} alt="Article COPD" />
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
                <img src={dummyImgArticle} alt="Article COPD" />
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
                <img src={dummyVideo} alt="Video COPD" />
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
      <header className="header">
        <div className="header-contents">
          <span
            className="header-icons-logo"
            onClick={() => redirect("/dashboard")}
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
              onClick={() => toggleHeaderPanels("favs")}
            >
              {<BsFillStarFill />}
            </button>
            <button className={`mobile-icon-effect`}>{<FaUser />}</button>
            <button
              className={`mobile-icon-effect ${
                toggleNotifActive ? "activate-icons" : ""
              }`}
              onClick={() => toggleHeaderPanels("notifi")}
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
