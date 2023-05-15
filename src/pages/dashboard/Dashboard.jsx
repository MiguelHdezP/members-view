import React, { useState } from "react";
import "./Dashboard.scss";
import "react-circular-progressbar/dist/styles.css";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Divider } from "../../components/divider/Divider";
import { JourneyTracker } from "../../components/journey-tracker/JourneyTracker";
import { MaterialAlert } from "../../components/material-alert/MaterialAlert";
import { DashboardContents } from "../../data/dashboardData";

//sessionStorage.setItem("tasksProgress", JSON.stringify([false, true, false]));

export const Dashboard = () => {
  const [renderStageJourneyTracker, setRenderStageJourneyTracker] = useState(1);
  const [renderConditionDash, setRenderConditionDash] = useState(0);
  let DashboardContentsArr = DashboardContents(
    renderStageJourneyTracker,
    renderConditionDash,
    setRenderStageJourneyTracker
  );

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
              <JourneyTracker
                stages={DashboardContentsArr.jTracker}
                currentStage={renderStageJourneyTracker}
                fn={setRenderStageJourneyTracker}
                fn2={setRenderConditionDash}
              />
              <Divider customClass="divider-bottom" />
            </div>
            {DashboardContentsArr.renderConts}
          </div>
        </section>
      </div>
      <Footer />
    </MobileContainer>
  );
};
