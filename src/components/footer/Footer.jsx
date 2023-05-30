import React, { useState } from "react";
import "./Footer.scss";
import { IconContext } from "react-icons";
import { MdHomeFilled } from "react-icons/md";
import { BsChatTextFill, BsFillTrophyFill } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { FaEllipsisH } from "react-icons/fa";
import { GiHealthPotion, GiShinyApple } from "react-icons/gi";
import { AiFillInfoCircle } from "react-icons/ai";
import { NotificationsPane } from "../../components/notificationsPane/NotificationsPane";
import { BoxCard } from "../boxCard/BoxCard";
import { redirect } from "../../utils/scripts";

export const Footer = ({ customClass = "", lang = "" }) => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleActiveClass, setToggleActiveClass] = useState(false);

  const moreOptions = () => {
    setToggleActiveClass(!toggleActiveClass);
    setToggleNotifActive(!toggleNotifActive);
  };

  const currentLang = sessionStorage.getItem("lang") ?? "en";
  let healthIn = "";
  let careJour = "";
  let appoints = "";
  let awardsTitle = "";
  let programOver = "";
  let eduCont = "";
  let moreMas = "";

  if (currentLang === "en") {
    healthIn = "Health Insights";
    careJour = "Care Journey";
    appoints = "Appointments";
    awardsTitle = "Awards";
    programOver = "Program Overview";
    eduCont = "Educational content";
    moreMas = "More";
  } else if (currentLang === "es") {
    healthIn = "Salud";
    careJour = "Viaje de Cuidados";
    appoints = "Citas";
    awardsTitle = "Premios";
    programOver = "Programa";
    eduCont = "Educación";
    moreMas = "Más";
  }

  return (
    <>
      <NotificationsPane
        customClass={`footer-more-options ${
          toggleNotifActive ? "open-activity " : ""
        }`}
        customId="footer-more-optionsID"
        fn={moreOptions}
      >
        <section className={`footer-options ${customClass}`}>
          <div
            className="footer-option-button"
            onClick={() => redirect("/healthInsights")}
          >
            <BoxCard customClass="footer-card-option">
              <IconContext.Provider
                value={{
                  className: "new-icons-more-menu",
                }}
              >
                <GiHealthPotion />
              </IconContext.Provider>
            </BoxCard>
            <p className="footer-option-label">{healthIn}</p>
          </div>

          <div
            className="footer-option-button"
            onClick={() => redirect("/awards")}
          >
            <BoxCard customClass="footer-card-option">
              <IconContext.Provider
                value={{
                  className: "new-icons-more-menu new-icons-more-menu-size4",
                }}
              >
                <BsFillTrophyFill />
              </IconContext.Provider>
            </BoxCard>
            <p className="footer-option-label">{awardsTitle}</p>
          </div>
          <div
            className="footer-option-button"
            onClick={() => redirect("/dashboard?q=single")}
          >
            <BoxCard customClass="footer-card-option">
              <IconContext.Provider
                value={{
                  className: "new-icons-more-menu",
                }}
              >
                <AiFillInfoCircle />
              </IconContext.Provider>
            </BoxCard>
            <p className="footer-option-label">{programOver}</p>
          </div>

          <div
            className="footer-option-button"
            onClick={() => redirect("/education?q=fullpage")}
          >
            <BoxCard customClass="footer-card-option">
              <IconContext.Provider
                value={{
                  className: "new-icons-more-menu",
                }}
              >
                <GiShinyApple />
              </IconContext.Provider>
            </BoxCard>
            <p className="footer-option-label">{eduCont}</p>
          </div>
        </section>
      </NotificationsPane>
      <footer className="footer">
        <IconContext.Provider
          value={{
            className: "active-icon footer-buttons",
          }}
        >
          <div className="footer-contents">
            <button
              className="mobile-icon-effect"
              onClick={() => redirect("/dashboard?q=single")}
            >
              {<MdHomeFilled />}
              <p className="footer-icon-text">{careJour}</p>
            </button>
            <button
              className="mobile-icon-effect"
              onClick={() => redirect("/chats")}
            >
              <span className="mobile-icon-new footer-icon-new"></span>
              {<BsChatTextFill />} <p className="footer-icon-text">Chats</p>
            </button>
            <button
              className="mobile-icon-effect"
              onClick={() => redirect("/appointments")}
            >
              {<IoCalendar />} <p className="footer-icon-text">{appoints}</p>
            </button>
            <button
              className={`mobile-icon-effect ${
                toggleActiveClass ? "mobile-icon-color" : ""
              }`}
              onClick={() => moreOptions()}
            >
              {<FaEllipsisH />} <p className="footer-icon-text">{moreMas}</p>
            </button>
          </div>
        </IconContext.Provider>
      </footer>
    </>
  );
};
