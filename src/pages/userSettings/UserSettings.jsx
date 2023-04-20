import React, { useEffect, useState } from "react";
import "./UserSettings.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { HiOutlineChevronRight } from "react-icons/hi";
import { redirect } from "../../utils/scripts";

export const UserSettings = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);
  let classActivePause = "";
  let classActivePauseLabel = "";

  const toggleHeaderPanels = (action) => {
    if (action === "notifi") {
      if (toggleFavs) setToggleFavs(!toggleFavs);
      setToggleNotifActive(!toggleNotifActive);
    } else if (action === "favs") {
      if (toggleNotifActive) setToggleNotifActive(!toggleNotifActive);
      setToggleFavs(!toggleFavs);
    }
  };

  const activePauseProgram = () => {
    redirect("/userSettings/member-settings");
  };

  let checkIfActivePausedState = localStorage.getItem("activePause");

  if (checkIfActivePausedState === null) {
    localStorage.setItem("activePause", "true");
  }

  let programActivePaused = localStorage.getItem("activePause");
  if (programActivePaused === "true") {
    classActivePause = "flag-active";
    classActivePauseLabel = "Active";
  } else if (programActivePaused === "false") {
    classActivePause = "flag-paused";
    classActivePauseLabel = "Paused";
  }

  return (
    <MobileContainer className="appImg">
      <Header
        toggleNotifActive={toggleNotifActive}
        toggleFavs={toggleFavs}
        toggleHeaderPanels={toggleHeaderPanels}
      />
      <div className="mobile-scroll-settings">
        <section className="settings-page">
          <div className="settings-container">
            <div className="settings-titles">
              <p className="text-title settings-title-bottom">Jane Sumari</p>
              <p className="text-smallText">jane@email.com</p>
            </div>
            <div className="settings-enrolled">
              <p className="text-midText text-left">Enrolled Care Prorams</p>
              <BoxCard
                customClass="settings-boxcard"
                fn={() => activePauseProgram()}
              >
                <span
                  className={`settings-boxcard-flag ${classActivePause} text-smallText reset-margin`}
                >
                  {classActivePauseLabel}
                </span>
                <p className="text-midText reset-margin text-left">
                  Care Program 1
                </p>
                <span className="settings-boxcard-chevron">
                  <HiOutlineChevronRight />
                </span>
              </BoxCard>
            </div>
            <div className="settings-settings">
              <p className="text-midText text-left">Settings</p>
              <BoxCard customClass="settings-boxcard">
                <p className="text-midText reset-margin">Notifications</p>
                <span className="settings-boxcard-chevron">
                  <HiOutlineChevronRight />
                </span>
              </BoxCard>
              <BoxCard customClass="settings-boxcard">
                <p className="text-midText reset-margin">About</p>
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
