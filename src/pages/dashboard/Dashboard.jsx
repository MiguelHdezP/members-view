import React, { useState } from "react";
import "./Dashboard.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { LinkButton } from "../../components/linkButton/LinkButton";
import { Divider } from "../../components/divider/Divider";
import { RoundedCard } from "../../components/roundedCard/RoundedCard";
import { IconContext } from "react-icons";
import { HiOutlineChevronRight } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegHandshake, FaLock } from "react-icons/fa";
import { RiSurveyLine } from "react-icons/ri";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { BadgeTrophyFull } from "../../components/badgeTrophy/BadgeTrophyFull";
import { BadgeTrophyOutline } from "../../components/badgeTrophy/BadgeTrophyOutline";
import { copdImg2 } from "../../data/images";
import { redirect } from "../../utils/scripts";

export const Dashboard = () => {
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
      <div className="mobile-scroll-dashboard">
        <section className="dashboard-page">
          <div className="dashboard-titles">
            <p className="text-title startS-title-text">Care Program</p>
            <p className="text-smallText">Welcome back Jane!</p>
          </div>
          <div className="dashboard-contents">
            <div className="dashboard-contents-joruneyTracker">
              <p className="text-midText fuchi">Care Journey Tracker</p>
              <div className="journey-tracker">
                <BoxCard customClass="dashboard-tracker-cards">
                  <span
                    style={{
                      borderRadius: "50%",
                      color: "gray",
                      height: "1.5rem",
                      width: "1.5rem",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    <IconContext.Provider
                      value={{
                        className: "Cheiot",
                      }}
                    >
                      <FaRegHandshake />
                    </IconContext.Provider>
                  </span>
                  <p className="text-smallText">Onboarding</p>
                </BoxCard>
                <BoxCard
                  customClass="dashboard-tracker-cards"
                  fn={() => redirect("/assessments")}
                >
                  <span
                    style={{
                      borderRadius: "50%",
                      color: "gray",
                      height: "1.5rem",
                      width: "1.5rem",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    <IconContext.Provider
                      value={{
                        className: "Cheiot",
                      }}
                    >
                      <RiSurveyLine />
                    </IconContext.Provider>
                  </span>
                  <p className="text-smallText startS-title-text">Assessment</p>
                </BoxCard>
                <BoxCard
                  customClass="dashboard-tracker-cards"
                  fn={() => redirect("/memberview/CheckInsPage")}
                >
                  <span
                    style={{
                      borderRadius: "50%",
                      color: "gray",
                      height: "1.5rem",
                      width: "1.5rem",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    <IconContext.Provider
                      value={{
                        className: "Cheiot",
                      }}
                    >
                      <FaLock />
                    </IconContext.Provider>
                  </span>
                  <p className="text-smallText">Check Ins</p>
                </BoxCard>
              </div>
              <Divider customClass="divider-bottom" />
            </div>
            <div className="dashboard-contents-progress">
              <p className="text-title startS-title-text">Almost There</p>
              <p className="text-smallText">
                Please finish the assessment to keep up the momentum in your
                health journey.
              </p>
              <BoxCard customClass="almost-cards">
                <div
                  className="almost-cards-contents"
                  onClick={() => redirect("/assessments")}
                >
                  <span
                    style={{
                      borderRadius: "50%",
                      border: "1px solid green",
                      height: "2.7rem",
                      width: "2.7rem",
                      display: "block",
                      color: "green",
                      lineHeight: "2.4rem",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                    }}
                  >
                    100%
                  </span>
                  <div className="almost-titles">
                    <p className="text-midText amost-nob">Assessment</p>
                    <p className="text-smallText amost-nob">In progress</p>
                  </div>
                  <div className="almost-chevron">
                    <HiOutlineChevronRight />
                  </div>
                </div>
              </BoxCard>
              <BoxCard customClass="almost-cards">
                <div
                  className="almost-cards-contents"
                  onClick={() => redirect("/education")}
                >
                  <span
                    style={{
                      borderRadius: "50%",
                      border: "1px solid #5c4bd3",
                      height: "2.7rem",
                      width: "2.7rem",
                      display: "block",
                      color: "#5c4bd3",
                      lineHeight: "2.4rem",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                    }}
                  >
                    3/6
                  </span>
                  <div className="almost-titles">
                    <p className="text-midText amost-nob">
                      Educational Content
                    </p>
                    <p className="text-smallText amost-nob">In progress</p>
                  </div>
                  <div className="almost-chevron">
                    <HiOutlineChevronRight />
                  </div>
                </div>
              </BoxCard>
              <Divider customClass="divider-bottom" />
            </div>
            <div className="dashboard-contents-progress">
              <p className="text-title startS-title-text">
                Upcoming Appointments
              </p>
              <p className="text-smallText">
                You have an upcoming appointments
              </p>
              <BoxCard customClass="almost-cards">
                <div
                  className="almost-cards-contents"
                  onClick={() => redirect("/assessments")}
                >
                  <span
                    style={{
                      color: "#b0b0bf",
                      fontSize: "2rem",
                    }}
                  >
                    <BsCalendar2WeekFill />
                  </span>
                  <div className="almost-titles">
                    <p className="text-midText amost-nob">
                      Care Manager Check In
                    </p>
                    <p className="text-smallText amost-nob">
                      Upcomming Appointment
                    </p>
                  </div>
                  <div className="almost-chevron">
                    <HiOutlineChevronRight />
                  </div>
                </div>
              </BoxCard>
              <Divider customClass="divider-bottom" />
            </div>
            <div className="dashboard-contents-education">
              <p className="text-title startS-title-text">Upcoming Tasks</p>
              <p className="text-smallText">
                There's new content for you to view
              </p>
              <RoundedCard customClass="education-rounded-card">
                <IconContext.Provider
                  value={{
                    className: "button-card-star-inprogress",
                  }}
                >
                  <button
                    title="Add to favorites"
                    className="button-card-favs"
                    onClick={() => ""}
                  >
                    {<AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <img
                  src={copdImg2}
                  alt="Risk Factors for Care Program"
                  className="image-top-roundedCorners img-tint-dark"
                />
                <div className="education-todo-texts">
                  <p
                    className="text-midText education-semibold-text education-text-mid"
                    style={{ textAlign: "left" }}
                  >
                    Risk Factors for Care Program
                  </p>
                  <p
                    className="text-midText education-text-mid"
                    style={{ textAlign: "left" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit
                    amet.
                  </p>
                  <p
                    className="text-smallText education-purple-text education-text-mid"
                    style={{ textAlign: "left" }}
                  >
                    3 min watch
                  </p>
                </div>
              </RoundedCard>
              <Divider customClass="divider-bottom" />
            </div>
            <div className="dashboard-contents-awards">
              <div className="dash-seeAll">
                <p className="text-title startS-title-text">Recent awards</p>
                <LinkButton text="See All" href="/awards" />
              </div>
              <div className="dashboard-contents-awards-badges">
                <BadgeTrophyFull />
                <BadgeTrophyFull />
                <BadgeTrophyFull />
              </div>
              <Divider customClass="divider-bottom" />
            </div>
            <div className="dashboard-contents-awards-progress">
              <div className="dash-seeAll">
                <p className="text-title startS-title-text">In progress</p>
                <LinkButton text="See All" />
              </div>
              <div className="dashboard-contents-awards-badges">
                <BadgeTrophyOutline />
                <BadgeTrophyOutline />
                <BadgeTrophyOutline />
              </div>
              <div className="bottom-spacer"></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MobileContainer>
  );
};
