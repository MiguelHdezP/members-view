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
import { redirect } from "../../utils/scripts";

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
          <div className="healthIn-container">
            <div className="healthIn-titles">
              <p className="text-title healthIn-title-bottom">
                Health Insights
              </p>
              <p className="text-smallText">
                Manage your health better by tracking your goals and keeping up
                with your care appointments.
              </p>
            </div>
            <div className="healthIn-enrolled">
              <BoxCard
                customClass="healthIn-boxcard"
                fn={() => {
                  redirect("/healthInsights/goals");
                }}
              >
                <IconContext.Provider
                  value={{
                    className: "healthIn-icon",
                  }}
                >
                  <span className="healthIn-boxcard-icons">
                    <SiTarget />
                  </span>
                </IconContext.Provider>
                <div className="healthIn-boxcard-texts">
                  <p className="text-title healthIn-text-marginBottom">Goals</p>
                  <p className="text-smallText startS-title-text">
                    Track care plan goals and create your own goals
                  </p>
                </div>
                <span className="healthIn-boxcard-chevron">
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
