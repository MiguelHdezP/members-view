import React, { useState } from "react";
import "../HealthInsights.scss";
import { MobileContainer } from "../../../components/mobileContainer/MobileContainer";
import { Header } from "../../../components/header/Header";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { Tabs } from "../../../components/tabs/Tabs";
import { TabsContentsGoals } from "../../../components/tabs/tabsCotentsGoals/TabsContentsGoals";
import { SecondaryButton } from "../../../components/secondaryButton/SecondaryButton";
import { PrimaryButton } from "../../../components/primaryButton/PrimaryButton";

export const HealthGoals = () => {
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
            <Breadcrumb text="Health Insights" href="/healthInsights" />
            <div className="healthIn-titles">
              <p className="text-title  healthIn-title-bottom">Goals</p>
              <p className="text-midText reset margin text-left">
                Manage your health by tracking care plan goals and creating your
                own goals.
              </p>
            </div>
            <div className="healthIn-tabs">
              <Tabs tabsContents={TabsContentsGoals} />
            </div>
          </div>
        </section>
      </div>
      <div className="health-buttons-container">
        <SecondaryButton
          text="Add New"
          customClass="healthIn-goals-btn"
          icon={true}
        />
        <PrimaryButton text="Manage Goals" customClass="healthIn-goals-btn" />
      </div>
    </MobileContainer>
  );
};
