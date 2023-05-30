import React, { useState } from "react";
import "./UserSettings.scss";
import { redirect, urlGetQueryString } from "../../utils/scripts";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { InitialSettings } from "./initialSettings/InitialSettings";
import { ProgramSettings } from "./programSettings/ProgramSettings";
import { LanguageSettings } from "./languageSettings/LanguageSettings";
import { ThemeSettings } from "./themeSettings/ThemeSettings";

export const UserSettings = ({ lang = "en" }) => {
  const [rightSettingsContent, setRightSettingsContent] = useState(0);

  const currentLang = sessionStorage.getItem("lang");

  if (currentLang !== null) {
    if (currentLang === "en") {
      lang = "en";
    } else if (currentLang === "es") {
      lang = "es";
    }
  }

  const renderRightSettingsPage = () => {
    let provi = rightSettingsContent;
    if (urlGetQueryString() === "theme") {
      provi = 4;
    }

    switch (provi) {
      case 1:
        return <ProgramSettings fn={setRightSettingsContent} />;
      case 2:
        return <LanguageSettings fn={setRightSettingsContent} />;
      case 4:
        return <ThemeSettings fn={setRightSettingsContent} />;
      default:
        return <InitialSettings fn={setRightSettingsContent} />;
    }
  };
  return (
    <MobileContainer className="appImg">
      <Header />
      <div className="mobile-scroll-settings">
        <section className="settings-page">{renderRightSettingsPage()}</section>
      </div>
      <Footer lang={lang} />
    </MobileContainer>
  );
};
