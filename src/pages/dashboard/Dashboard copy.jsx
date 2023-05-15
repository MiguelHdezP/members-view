import React, { useState } from "react";
import "./Dashboard.scss";
import "react-circular-progressbar/dist/styles.css";
import { copdImg2 } from "../../data/images";
import { redirect } from "../../utils/scripts";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { LinkButton } from "../../components/linkButton/LinkButton";
import { Divider } from "../../components/divider/Divider";
import { BadgeTrophyFull } from "../../components/badgeTrophy/BadgeTrophyFull";
import { BadgeTrophyOutline } from "../../components/badgeTrophy/BadgeTrophyOutline";
import { JourneyTracker } from "../../components/journey-tracker/JourneyTracker";
import { ContentCard } from "../../components/content-card/ContentCard";
import { EducationCard } from "../../components/education-card/EducationCard";
import { DashboardContentBlocks } from "../../components/dashboardContentBlocks/DashboardContentBlocks";
import { HiOutlineChevronRight } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { MaterialDropDown } from "../../components/material-dropdown/MaterialDropDown";
import { MaterialAlert } from "../../components/material-alert/MaterialAlert";
import { Rewards } from "../../components/rewards/Rewards";

export const Dashboard = () => {
  const [toggleActiveJourney, setToggleActiveJourney] = useState(2);

  let activateAlert = false;
  let alertTitle = "";
  let alertDesc = "";
  let alertLink = "#";

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
  }

  return (
    <MobileContainer className="appImg">
      <Header customClass="reset-divider" />
      {activateAlert ? (
        <MaterialAlert
          alertTitle={alertTitle}
          alertDesc={alertDesc}
          alertLink={alertLink}
        />
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
              <p className="text-midText text-title-adjustment">View Program</p>

              <JourneyTracker
                toggleActiveJourney={toggleActiveJourney}
                setToggleActiveJourney={setToggleActiveJourney}
              />
              <Divider customClass="divider-bottom" />
            </div>
            {toggleActiveJourney === 3 ? (
              <>
                <div className="dashboard-contents-progress">
                  <p className="text-title startS-title-text">
                    Your Tasks for this Week
                  </p>
                  <p className="text-smallText">
                    Complete your check in to stay on track and continue making
                    progress toward your health goals.
                  </p>
                  <BoxCard customClass="almost-cards">
                    <div className="almost-cards-contents almost-cards-loader">
                      <span className="dashboard-pill-new text-smallText reset-margin">
                        New
                      </span>
                      <div className="almost-titles">
                        <p className="text-midText amost-nob">
                          This week's check in
                        </p>
                        <p className="text-smallText amost-nob">Not started</p>
                      </div>
                      <div className="almost-chevron">
                        <HiOutlineChevronRight />
                      </div>
                    </div>
                  </BoxCard>
                  <BoxCard customClass="almost-cards">
                    <div
                      className="almost-cards-contents almost-cards-loader"
                      onClick={() => redirect("/education")}
                    >
                      <span className="dashboard-pill-new text-smallText reset-margin">
                        New
                      </span>
                      <div className="almost-titles">
                        <p className="text-midText amost-nob">
                          Educational Content
                        </p>
                        <p className="text-smallText amost-nob">Not started</p>
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
              </>
            ) : (
              <>
                <DashboardContentBlocks
                  dashContentTitle="Keep up the Good Work!"
                  dashContentDesc="You have finished your first assessment."
                >
                  <ContentCard
                    progress={100}
                    title="Assessment"
                    type="progress"
                    redirectPath="assessments"
                  />
                </DashboardContentBlocks>
                <DashboardContentBlocks
                  dashContentTitle="Almost There"
                  dashContentDesc="Please finish the assessment to keep up the momentum in your
                  health journey."
                >
                  <ContentCard
                    progress={66}
                    title="Assessment"
                    type="progress"
                    redirectPath="assessments"
                  />
                  <ContentCard
                    progress={3}
                    title="Assessment"
                    eduTotalContents={6}
                    type="progress"
                    redirectPath="assessments"
                  />
                </DashboardContentBlocks>
                <DashboardContentBlocks
                  dashContentTitle="Upcoming Appointments"
                  dashContentDesc="You have an upcoming appointments."
                >
                  <ContentCard
                    progress={3}
                    title="Care Manager Check In"
                    desc="Upcomming Appointment"
                    eduTotalContents={6}
                    type="icon"
                    redirectPath="appointments"
                    IconImg={BsCalendar2WeekFill}
                  />
                </DashboardContentBlocks>
                <DashboardContentBlocks
                  dashContentTitle="Upcoming Tasks"
                  dashContentDesc="There's new content for you to view."
                >
                  <EducationCard
                    thumbnail={copdImg2}
                    eduCardtitle="Risk Factors for Care Program"
                    eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet."
                    eduCardTime="3 min watch"
                  />
                </DashboardContentBlocks>
              </>
            )}
            <Rewards />
          </div>
        </section>
      </div>
      <Footer />
    </MobileContainer>
  );
};
