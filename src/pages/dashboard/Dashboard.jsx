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

export const Dashboard = ({ lang }) => {
  //const { addToFavs, addContentToFavs } = useContext(DataContext);
  const [renderStageJourneyTracker, setRenderStageJourneyTracker] = useState(1);
  const [renderConditionDash, setRenderConditionDash] = useState(0);

  const currentLang = sessionStorage.getItem("lang");

  if (currentLang !== null) {
    if (currentLang === "en") {
      lang = "en";
    } else if (currentLang === "es") {
      lang = "es";
    }
  }

  const handlePollo = (id) => {
    setRenderStageJourneyTracker(id);
  };

  let DashboardContentsArr = DashboardContents(
    renderStageJourneyTracker,
    renderConditionDash,
    handlePollo,
    lang
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
  let careProgram = "";
  let welcomes = "";
  if (lang === "en") {
    careProgram = "Welcome back Jane!  ";
    welcomes = "Here is your COPD Care Program:";
  } else if ((lang = "es")) {
    careProgram = "¡Bienvenida Jane!";
    welcomes = "Éste es tu programa de EPOC";
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
          <div className="dashboard-titles" style={{ textAlign: "center" }}>
            <p
              className="text-title startS-title-text"
              style={{ textAlign: "center", marginTop: "1.2rem" }}
            >
              {careProgram}
            </p>
            <p className="text-smallText" style={{ textAlign: "center" }}>
              {welcomes}
            </p>
          </div>
          <div className="dashboard-contents">
            <div className="dashboard-contents-joruneyTracker">
              <JourneyTracker
                stages={DashboardContentsArr.jTracker}
                currentStage={renderStageJourneyTracker}
                fn={handleChangeOfStage}
                fn2={setRenderConditionDash}
                lang="en"
              />
              <Divider customClass="divider-bottom" />
            </div>
            {DashboardContentsArr.renderConts}
          </div>
          <div className="bottom-spacer-half"></div>
        </section>
      </div>
      <Footer lang={lang} />
    </MobileContainer>
  );
};
