import React, { useState } from "react";
import "./HealthInsights.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { HiOutlineChevronRight } from "react-icons/hi";
import { SiTarget } from "react-icons/si";
import { RiLinksLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { redirect } from "../../utils/scripts";

export const HealthInsights = () => {
  const redirectAndClearGoals = () => {
    localStorage.removeItem("completedTabs");
    redirect("/healthInsights/goals");
  };

  const redirectCareVisits = () => {
    redirect("/healthInsights/care-visits");
  };

  const currentLang = sessionStorage.getItem("lang") ?? "en";
  let healthIn = "";
  let healthInDesc = "";
  let goalsTitle = "";
  let goalsTrack = "";
  let careVisits = "";
  let careMissed = "";

  if (currentLang === "en") {
    healthIn = "Health Insights";
    healthInDesc =
      "Administre mejor su salud manteniéndose al día con sus objetivos y citas.";
    goalsTitle = "Goals";
    goalsTrack = "Track care plan goals and create your own goals";
    careVisits = "Care Visits";
    careMissed = "View care you've missed";
  } else if (currentLang === "es") {
    healthIn = "Salud";
    healthInDesc = "Viaje de Cuidados";
    goalsTitle = "Metas";
    goalsTrack = "Seguimiento y creación de objetivos";
    careVisits = "Visitas de Atención";
    careMissed = "Revisar citas perdidas";
  }

  return (
    <MobileContainer className="appImg">
      <Header />
      <div className="mobile-scroll-health">
        <section className="health-page">
          <div className="healthIn-container">
            <div className="healthIn-titles">
              <p className="text-title healthIn-title-bottom">{healthIn}</p>
              <p className="text-smallText">{healthInDesc}</p>
            </div>
            <div className="healthIn-enrolled">
              <BoxCard
                customClass="healthIn-boxcard"
                fn={() => {
                  redirectAndClearGoals();
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
                  <p className="text-midText healthIn-text-marginBottom">
                    {goalsTitle}
                  </p>
                  <p className="text-smallText startS-title-text">
                    {goalsTrack}
                  </p>
                </div>
                <span className="healthIn-boxcard-chevron">
                  <HiOutlineChevronRight />
                </span>
              </BoxCard>
              <BoxCard
                customClass="healthIn-boxcard"
                fn={() => {
                  redirectCareVisits();
                }}
              >
                <IconContext.Provider
                  value={{
                    className: "healthIn-icon",
                  }}
                >
                  <span className="healthIn-boxcard-icons">
                    <RiLinksLine />
                  </span>
                </IconContext.Provider>
                <div className="healthIn-boxcard-texts">
                  <p className="text-midText healthIn-text-marginBottom">
                    {careVisits}
                  </p>
                  <p className="text-smallText startS-title-text">
                    {careMissed}
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
