import React, { useState } from "react";
import "./AwardsPage.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BsFillTrophyFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { AwardsGreenImg, AwardsPurpleImg } from "../../data/images";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let awards = "";
let recentAwards = "";
let awardName = "";
let readtotal = "";
let inProgress = "";

if (currentLang === "en") {
  awards = "Awards";
  recentAwards = "Premios Recientes";
  awardName = "Award Name";
  readtotal = "5/10 read";
  inProgress = "In Progress";
} else if (currentLang === "es") {
  awards = "Premios";
  recentAwards = "Premios Recientes";
  awardName = "Nomre del Premio";
  readtotal = "lectura 5/10";
  inProgress = "En Progreso";
}

export const AwardsPage = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);

  const toggleHeaderPanels = (action) => {
    if (action === "notifi") {
      if (toggleFavs) setToggleFavs(!toggleFavs);
      setToggleNotifActive(!toggleNotifActive);
    } else if (action === "favs") {
      if (toggleNotifActive) setToggleNotifActive(!toggleNotifActive);
      setToggleFavs(!toggleFavs);
    }
  };

  return (
    <MobileContainer className="appImg">
      <Header
        toggleNotifActive={toggleNotifActive}
        toggleFavs={toggleFavs}
        toggleHeaderPanels={toggleHeaderPanels}
      />
      <div className="mobile-scroll-awards">
        <section className="awards-page">
          <div className="awards-page-contents">
            <h1 className="text-title">{awards}</h1>
            <p className="text-smallText awards-text-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              Ipsum dolor sit amet.
            </p>
            <div className="awards-badges-section">
              <h2 className="text-midText awards-text-mid">{recentAwards}</h2>
              <div className="awards-badges">
                <IconContext.Provider
                  value={{
                    className: "awards-trophy",
                  }}
                >
                  <div className="awards-single-badge">
                    <img
                      src={AwardsGreenImg}
                      alt=""
                      style={{ height: "4rem", width: "4rem" }}
                    />
                    <p className="text-smallText awards-text-small">
                      {awardName}
                    </p>
                  </div>
                  <div className="awards-single-badge">
                    <img
                      src={AwardsGreenImg}
                      alt=""
                      style={{ height: "4rem", width: "4rem" }}
                    />
                    <p className="text-smallText awards-text-small">
                      {awardName}
                    </p>
                  </div>
                  <div className="awards-single-badge">
                    <img
                      src={AwardsGreenImg}
                      alt=""
                      style={{ height: "4rem", width: "4rem" }}
                    />
                    <p className="text-smallText awards-text-small">
                      {awardName}
                    </p>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
            <div className="awards-badges-section">
              <h2 className="text-midText awards-text-mid awards-text-mid">
                {inProgress}
              </h2>
              <div className="awards-badges">
                <IconContext.Provider
                  value={{
                    className: "awards-trophy-inprogress",
                  }}
                >
                  <div className="awards-single-badgeProgress">
                    <img
                      src={AwardsPurpleImg}
                      alt=""
                      style={{ height: "4rem", width: "4rem" }}
                    />
                    <p className="text-smallText awards-text-small">
                      {awardName}
                    </p>
                    <p className="text-smallText awards-text-small awards-small-text">
                      {readtotal}
                    </p>
                  </div>
                  <div className="awards-single-badgeProgress">
                    <img
                      src={AwardsPurpleImg}
                      alt=""
                      style={{ height: "4rem", width: "4rem" }}
                    />
                    <p className="text-smallText awards-text-small">
                      {awardName}
                    </p>
                    <p className="text-smallText awards-text-small awards-small-text">
                      {readtotal}
                    </p>
                  </div>
                  <div className="awards-single-badgeProgress">
                    <img
                      src={AwardsPurpleImg}
                      alt=""
                      style={{ height: "4rem", width: "4rem" }}
                    />
                    <p className="text-smallText awards-text-small">
                      {awardName}
                    </p>
                    <p className="text-smallText awards-text-small awards-small-text">
                      {readtotal}
                    </p>
                  </div>
                  <div className="awards-single-badgeProgress">
                    <img
                      src={AwardsPurpleImg}
                      alt=""
                      style={{ height: "4rem", width: "4rem" }}
                    />
                    <p className="text-smallText awards-text-small">
                      {awardName}
                    </p>
                    <p className="text-smallText awards-text-small awards-small-text">
                      {readtotal}
                    </p>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer customClass="footer-moreOptions-bottomFix" />
    </MobileContainer>
  );
};
