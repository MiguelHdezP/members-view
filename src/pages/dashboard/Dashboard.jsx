import React, { useContext, useState } from "react";
import "./Dashboard.scss";
import "react-circular-progressbar/dist/styles.css";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { Divider } from "../../components/divider/Divider";
import { JourneyTracker } from "../../components/journey-tracker/JourneyTracker";
import { MaterialAlert } from "../../components/material-alert/MaterialAlert";
import { DashboardContents } from "../../data/dashboardData";
//import { DataContext } from "../../data/context/dataContext";

//sessionStorage.setItem("tasksProgress", JSON.stringify([false, true, false]));

export const Dashboard = () => {
  //const { addToFavs, addContentToFavs } = useContext(DataContext);
  const [renderStageJourneyTracker, setRenderStageJourneyTracker] = useState(1);
  const [renderConditionDash, setRenderConditionDash] = useState(0);

  const handlePollo = (id) => {
    console.log("hanlde Pollo: ", id);
    setRenderStageJourneyTracker(id);
  };

  let DashboardContentsArr = DashboardContents(
    renderStageJourneyTracker,
    renderConditionDash,
    handlePollo
  );

  const handleChangeOfStage = (id) => {
    let getActiveStage = JSON.parse(sessionStorage.getItem("stagesAcive"));
    if (getActiveStage === null) {
      let objta = [];
      if (id === 2) {
        objta = [
          { stage: id, active: true },
          { stage: 4, active: false },
        ];
      } else {
        objta = [{ stage: id, active: true }];
      }
      sessionStorage.setItem("stagesAcive", JSON.stringify(objta));
    } else {
      let stageArr = getActiveStage.map((e) => {
        if (e.stage === id) {
          e.active = true;
        } else {
          e.active = false;
        }
        return e;
      });
      let stageNumbers = stageArr.map((e) => e.stage);
      if (!stageNumbers.some((e) => e === id)) {
        sessionStorage.removeItem("stagesAcive");
        sessionStorage.setItem(
          "stagesAcive",
          JSON.stringify([...stageArr, { stage: id, active: true }])
        );
      } else {
        sessionStorage.removeItem("stagesAcive");
        sessionStorage.setItem("stagesAcive", JSON.stringify([...stageArr]));
      }
    }
    setRenderStageJourneyTracker(id);
  };

  let activateAlert = false;
  let alertTitle = "";
  let alertDesc = "";
  let alertLink = "#";

  const checkIfActiveProgram = sessionStorage.getItem("activePause");
  if (checkIfActiveProgram !== null) {
    alertTitle = "The program has been paused";
    alertDesc = "To reactivate the program go";
    alertLink = "/userSettings";
    activateAlert = true;
  } else {
    alertTitle = "You have opted-out the Care Program";
    alertDesc = "To contact your care manager go";
    alertLink = "/chats";
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
                fn={handleChangeOfStage}
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
