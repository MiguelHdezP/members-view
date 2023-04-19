import React, { useState } from "react";
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
      <div className="mobile-scroll-settings">
        <section className="settings-page">
          <div className="settings-container">
            <div className="settings-titles">
              <p className="text-title settings-title-bottom">Jane Sumari</p>
              <p className="text-smallText">jane@email.com</p>
            </div>
            <div className="settings-enrolled">
              <p className="text-midText text-left">Enrolled Care Prorams</p>
              <BoxCard customClass="settings-boxcard">
                <span className="settings-boxcard-flag flag-paused text-smallText reset-margin">
                  Paused
                </span>
                <p className="text-midText reset-margin text-left">
                  Care Program
                </p>
                <span className="settings-boxcard-chevron">
                  <HiOutlineChevronRight />
                </span>
              </BoxCard>
              <BoxCard customClass="settings-boxcard">
                <span className="settings-boxcard-flag flag-active text-smallText reset-margin">
                  Active
                </span>
                <p className="text-midText reset-margin text-left">
                  Hypertension Care Program
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
              <BoxCard
                customClass="settings-boxcard"
                fn={() => redirect("/userSettings/member-settings")}
              >
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
