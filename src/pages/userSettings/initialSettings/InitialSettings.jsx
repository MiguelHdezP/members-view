import React from "react";
import { BoxCard } from "../../../components/boxCard/BoxCard";
import { BsGear } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { HiOutlineChevronRight } from "react-icons/hi";

export const InitialSettings = ({ fn, lang = "en" }) => {
  const currentLang = sessionStorage.getItem("lang");

  let configu = "Settings";
  let configuProg = "Program Settings";
  let configuLang = "Language Settings";
  let configNotifi = "Notifications";
  if (currentLang !== null) {
    if (currentLang === "en") {
      lang = "en";
      configu = "Settings";
      configuProg = "Program Settings";
      configuLang = "Language Settings";
      configNotifi = "Notifications";
    } else if (currentLang === "es") {
      lang = "es";
      configu = "Configuración";
      configuProg = "Configuración del Programa";
      configuLang = "Configuración del Idioma";
      configNotifi = "Notificaciones";
    }
  }

  return (
    <div className="settings-container">
      <div className="settings-titles">
        <p className="text-title settings-title-bottom">Jane Sumari</p>
        <p className="text-smallText">jane@email.com</p>
        <div>
          <p className="text-smallText" style={{ fontWeight: "bold" }}>
            {configu}
          </p>
          <BoxCard customClass="settings-boxcard" fn={() => fn(1)}>
            <span>
              <BsGear />
            </span>
            <p
              className="text-midText reset-margin"
              style={{ textAlign: "left" }}
            >
              {configuProg}
            </p>
            <div className="almost-chevron">
              <HiOutlineChevronRight />
            </div>
          </BoxCard>
          <BoxCard customClass="settings-boxcard" fn={() => fn(2)}>
            <span>
              <GrLanguage />
            </span>
            <div>
              <p
                className="text-midText reset-margin"
                style={{ textAlign: "left" }}
              >
                {configuLang}
              </p>
              <p style={{ textAlign: "left", fontSize: "12px" }}>
                {lang === "en" ? "English (System Default)" : ""}
              </p>
            </div>
            <div className="almost-chevron">
              <HiOutlineChevronRight />
            </div>
          </BoxCard>
          {/*
          <BoxCard customClass="settings-boxcard" fn={() => fn(4)}>
            <span>
              <AiOutlineInfoCircle />
            </span>
            <p className="text-midText reset-margin">Theme</p>
            <div className="almost-chevron">
              <HiOutlineChevronRight />
            </div>
          </BoxCard>
          <BoxCard customClass="settings-boxcard">
            <span>
              <IoMdNotificationsOutline />
            </span>
            <p
              className="text-midText reset-margin"
              style={{ textAlign: "left" }}
            >
              {configNotifi}
            </p>
            <div className="almost-chevron">
              <HiOutlineChevronRight />
            </div>
          </BoxCard>
          */}
        </div>
      </div>
    </div>
  );
};
