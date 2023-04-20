import React, { useState } from "react";
import "./Chats.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Tabs } from "../../components/tabs/Tabs";
import { TabsContentsChats } from "../../components/authIdentityForm/tabContentsChats/TabsContentsChats";

export const Chats = () => {
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
      <div className="mobile-scroll-chats">
        <section className="chats-page">
          <div className="chats-container">
            <div className="chats-tabs-header">
              <Tabs
                tabsContents={TabsContentsChats}
                customClass="chats-tabs"
                customClassTab1="chat-tab-btn1"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MobileContainer>
  );
};
