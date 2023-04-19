import React, { useState } from "react";
import "./HealthInsights.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { HiOutlineChevronRight } from "react-icons/hi";
import { SiTarget } from "react-icons/si";
import { ImLink } from "react-icons/im";
import { IconContext } from "react-icons";

export const HealthInsights = () => {
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
      <div className="mobile-scroll-health">
        <section className="health-page">
          <div className="settings-container">
            <div className="settings-titles">
              <p className="text-title settings-title-bottom">
                Health Insights
              </p>
              <p className="text-smallText">
                Manage your health better by tracking your goals and keeping up
                with your care appointments.
              </p>
            </div>
            <div className="settings-enrolled">
              <BoxCard customClass="settings-boxcard">
                <IconContext.Provider
                  value={{
                    className: "settings-icon",
                  }}
                >
                  <span className="settings-boxcard-icons">
                    <SiTarget />
                  </span>
                </IconContext.Provider>
                <p className="text-midText reset-margin text-left">
                  Care Program
                </p>
                <span className="settings-boxcard-chevron">
                  <HiOutlineChevronRight />
                </span>
              </BoxCard>
              <BoxCard customClass="settings-boxcard">
                <IconContext.Provider
                  value={{
                    className: "settings-icon",
                  }}
                >
                  <span className="settings-boxcard-icons">
                    <ImLink />
                  </span>
                </IconContext.Provider>
                <p className="text-midText reset-margin text-left">
                  Hypertension Care Program
                </p>
                <span className="settings-boxcard-chevron">
                  <HiOutlineChevronRight />
                </span>
              </BoxCard>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MobileContainer>
  );
};
