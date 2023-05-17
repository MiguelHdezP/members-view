import React, { useState } from "react";
import "./Footer.scss";
import { IconContext } from "react-icons";
import { MdHomeFilled } from "react-icons/md";
import { BsChatTextFill } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { FaEllipsisH } from "react-icons/fa";
import { NotificationsPane } from "../../components/notificationsPane/NotificationsPane";
import { BoxCard } from "../boxCard/BoxCard";
import { health, program, education, awards } from "../../data/images";
import { redirect } from "../../utils/scripts";

export const Footer = ({ customClass = "" }) => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleActiveClass, setToggleActiveClass] = useState(false);

  const moreOptions = () => {
    setToggleActiveClass(!toggleActiveClass);
    setToggleNotifActive(!toggleNotifActive);
  };

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
              <img
                src={health}
                alt="Health Insights"
                className="footer-option-img"
              />
            </BoxCard>
            <p className="footer-option-label">Health Insights</p>
          </div>

          <div
            className="footer-option-button"
            onClick={() => redirect("/awards")}
          >
            <BoxCard customClass="footer-card-option">
              <img src={awards} alt="Awards" className="footer-option-img" />
            </BoxCard>
            <p className="footer-option-label">Awards</p>
          </div>
          <div
            className="footer-option-button"
            onClick={() => redirect("/dashboard?q=single")}
          >
            <BoxCard customClass="footer-card-option">
              <img
                src={program}
                alt="Program Overview"
                className="footer-option-img"
              />
            </BoxCard>
            <p className="footer-option-label">Program Overview</p>
          </div>

          <div
            className="footer-option-button"
            onClick={() => redirect("/education")}
          >
            <BoxCard customClass="footer-card-option">
              <img
                src={education}
                alt="Education Content"
                className="footer-option-img"
              />
            </BoxCard>
            <p className="footer-option-label">Educational content</p>
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
              <p className="footer-icon-text">Care Journey</p>
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
              {<IoCalendar />} <p className="footer-icon-text">Appointments</p>
            </button>
            <button
              className={`mobile-icon-effect ${
                toggleActiveClass ? "mobile-icon-color" : ""
              }`}
              onClick={() => moreOptions()}
            >
              {<FaEllipsisH />} <p className="footer-icon-text">More</p>
            </button>
          </div>
        </IconContext.Provider>
      </footer>
    </>
  );
};
