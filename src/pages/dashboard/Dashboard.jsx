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
import { BsCalendar2WeekFill } from "react-icons/bs";
import { BadgeTrophyFull } from "../../components/badgeTrophy/BadgeTrophyFull";
import { BadgeTrophyOutline } from "../../components/badgeTrophy/BadgeTrophyOutline";
import { copdImg2 } from "../../data/images";
import { redirect } from "../../utils/scripts";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Dashboard = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);
  let activateAlert = false;
  let alertTitle = "";
  let alertDesc = "";
  let alertLink = "#";
  let deactivateAssessments = false;

  const toggleHeaderPanels = (action) => {
    if (action === "notifi") {
      if (toggleFavs) setToggleFavs(!toggleFavs);
      setToggleNotifActive(!toggleNotifActive);
    } else if (action === "favs") {
      if (toggleNotifActive) setToggleNotifActive(!toggleNotifActive);
      setToggleFavs(!toggleFavs);
    }
  };

  const checkIfActiveProgram = localStorage.getItem("activePause");
  if (checkIfActiveProgram !== null && checkIfActiveProgram === "false") {
    let isProgramPaused = localStorage.getItem("activePause");

    if (isProgramPaused !== null && isProgramPaused === "false") {
      alertTitle = "The program has been paused";
      alertDesc = "To reactivate the program go";
      alertLink = "/userSettings/member-settings";
    } else {
      alertTitle = "You have opted-out the Care Program";
      alertDesc = "To contact your care manager go";
      alertLink = "/chats";
    }
    activateAlert = true;
    deactivateAssessments = true;
    //  localStorage.removeItem("exitProgram");
  }

  return (
    <MobileContainer className="appImg">
      <Header
        toggleNotifActive={toggleNotifActive}
        toggleFavs={toggleFavs}
        toggleHeaderPanels={toggleHeaderPanels}
      />
      {activateAlert ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="info">
            <AlertTitle>{alertTitle}</AlertTitle>
            {alertDesc}
            <strong>
              <LinkButton
                text="here"
                href={alertLink}
                customClass="dashboard-alert-link"
              />
            </strong>
          </Alert>
        </Stack>
      ) : (
        ""
      )}
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
                <BoxCard
                  customClass="dashboard-tracker-cards"
                  fn={() => redirect("/memberview/programOverview")}
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
                        className: "dashboard-tracker-icons",
                      }}
                    >
                      <FaRegHandshake />
                    </IconContext.Provider>
                  </span>
                  <p className="text-smallText dashboard-tracker-texts">
                    Onboarding
                  </p>
                </BoxCard>
                <BoxCard
                  customClass={`${
                    deactivateAssessments
                      ? "dashboard-tracker-cards-deactivate dashboard-tracker-cards-active"
                      : "dashboard-tracker-cards-active"
                  }`}
                >
                  <span
                    style={{
                      borderRadius: "50%",
                      color: "#5c4bd3",
                      height: "1.5rem",
                      width: "1.5rem",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    <IconContext.Provider
                      value={{
                        className: "dashboard-tracker-icons",
                      }}
                    >
                      <FaRegHandshake />
                    </IconContext.Provider>
                  </span>
                  <p className="text-smallText dashboard-tracker-texts-active">
                    Assessments
                  </p>
                </BoxCard>
                <BoxCard
                  customClass="dashboard-tracker-cards"
                  fn={() => () => {}}
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
                        className: "dashboard-tracker-icons",
                      }}
                    >
                      <FaLock />
                    </IconContext.Provider>
                  </span>
                  <p className="text-smallText dashboard-tracker-texts">
                    Check Ins
                  </p>
                </BoxCard>
              </div>
              <Divider customClass="divider-bottom" />
            </div>
            <div className="dashboard-contents-progress">
              <p className="text-title startS-title-text">
                Keep up the Good Work!
              </p>
              <p className="text-smallText">
                You have finished your first assessment.
              </p>
              <BoxCard customClass="almost-cards">
                <div
                  className="almost-cards-contents almost-cards-loader"
                  onClick={() => redirect("/assessments")}
                >
                  <div className="almost-cards-loader-icon">
                    <div className="cards-loader-icon">
                      <CircularProgressbar
                        value={100}
                        text="100%"
                        styles={buildStyles({
                          textSize: "1.5rem",
                          pathColor: `#00a223`,
                          textColor: "#00a223",
                          trailColor: "#d6d6d6",
                          backgroundColor: "white",
                        })}
                      />
                    </div>
                  </div>
                  <div className="almost-titles">
                    <p className="text-midText amost-nob">Assessment</p>
                    <p className="text-smallText amost-nob">Completed</p>
                  </div>
                  <div className="almost-chevron">
                    <HiOutlineChevronRight />
                  </div>
                </div>
              </BoxCard>
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
                  className="almost-cards-contents almost-cards-loader"
                  onClick={() => redirect("/assessments")}
                >
                  <div className="almost-cards-loader-icon">
                    <div className="cards-loader-icon">
                      <CircularProgressbar
                        value={66}
                        text="66%"
                        styles={buildStyles({
                          textSize: "1.5rem",
                          pathColor: `orange`,
                          textColor: "orange",
                          trailColor: "#d6d6d6",
                          backgroundColor: "white",
                        })}
                      />
                    </div>
                  </div>
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
                  className="almost-cards-contents  almost-cards-loader"
                  onClick={() => redirect("/education")}
                >
                  <div className="almost-cards-loader-icon">
                    <div className="cards-loader-icon">
                      <CircularProgressbar
                        value={50}
                        text="3/6"
                        styles={buildStyles({
                          textSize: "1.5rem",
                          pathColor: `#5c4bd3`,
                          textColor: "#5c4bd3",
                          trailColor: "#d6d6d6",
                          backgroundColor: "white",
                        })}
                      />
                    </div>
                  </div>
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
                  onClick={() => redirect("/appointments")}
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
                <LinkButton text="See All" href="/awards" />
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
