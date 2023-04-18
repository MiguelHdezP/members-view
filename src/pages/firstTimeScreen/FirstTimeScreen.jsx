import React, { useState } from "react";
import "./FirstTimeScreen.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { PrimaryButton } from "../../components/primaryButton/PrimaryButton";
import { cOPDFirstTimeImg } from "../../data/images";
import { redirect } from "../../utils/scripts";

export const FirstTimeScreen = () => {
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
      <div className="mobile-scroll-firstTime">
        <section className="firsTime-page">
          <div className="firstTime-page-contents">
            <img
              className="firstTime-topImg"
              src={cOPDFirstTimeImg}
              alt="COPD"
            />
            <h1 className="firstTime-title">COPD Care Program Overview</h1>
            <p className="firstTime-subText">
              Lorem ipsum dolor sit amet, consecuter adipsicing elit, sed do
              sodo.
            </p>
            <BoxCard customClass="firstTime-article-boxCard">
              <p className="firstTime-article-title">In this Article</p>
              <ul className="firstTime-article-list">
                <li className="firstTime-list">
                  <a href="#what-expect" className="firstTime-list-anchor">
                    What to Expect
                  </a>
                </li>
                <li className="firstTime-list">
                  <a href="#how-help" className="firstTime-list-anchor">
                    How this program can help
                  </a>
                </li>
                <li className="firstTime-list">
                  <a href="#resources" className="firstTime-list-anchor">
                    Related resources
                  </a>
                </li>
              </ul>
            </BoxCard>
            <div className="firstTime-section-contents" id="what-expect">
              <h2 className="firstTime-subTitle">What to Expect</h2>
              <p className="firstTime-subText">
                Lorem laboris nisi ut aliquip ex ea commodo consequat..
              </p>
              <p className="firstTime-subText">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                .
              </p>
              <p className="firstTime-subText">
                Lorem laboris nisi ut aliquip ex ea commodo consequat..
              </p>
              <p className="firstTime-subText">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                .
              </p>
              <p className="firstTime-subText">
                Lorem laboris nisi ut aliquip ex ea commodo consequat..
              </p>
            </div>
            <div className="firstTime-section-contents" id="how-help">
              <h2 className="firstTime-subTitle">How this program can help</h2>
              <p className="firstTime-subText">
                Lorem laboris nisi ut aliquip ex ea commodo consequat..
              </p>
              <p className="firstTime-subText">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                .
              </p>
              <p className="firstTime-subText">
                Lorem laboris nisi ut aliquip ex ea commodo consequat..
              </p>
              <p className="firstTime-subText">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                .
              </p>
              <p className="firstTime-subText">
                Lorem laboris nisi ut aliquip ex ea commodo consequat..
              </p>
            </div>
            <div className="firstTime-section-contents" id="resources">
              <h2 className="firstTime-subTitle">Related resources</h2>
              <p className="firstTime-subText">
                Lorem laboris nisi ut aliquip ex ea commodo consequat..
              </p>
              <p className="firstTime-subText">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                .
              </p>
              <p className="firstTime-subText">
                Lorem laboris nisi ut aliquip ex ea commodo consequat..
              </p>
              <p className="firstTime-subText">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                .
              </p>
              <p className="firstTime-subText">
                Lorem laboris nisi ut aliquip ex ea commodo consequat..
              </p>
            </div>
            <div className="bottom-spacer"></div>
          </div>
        </section>
      </div>
      <BoxCard customClass="firstTime-boxCard">
        <PrimaryButton
          text="Continue to Care Journey Dashboard"
          customClass="fistTime-primaryBtn"
          fn={() => redirect("/dashboard")}
        />
      </BoxCard>
    </MobileContainer>
  );
};
