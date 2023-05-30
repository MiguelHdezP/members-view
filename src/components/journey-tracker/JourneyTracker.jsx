import React, { useEffect, useState } from "react";
import "./JourneyTracker.scss";
import { BoxCard } from "../boxCard/BoxCard";
import { IconContext } from "react-icons";
import { AiFillLock } from "react-icons/ai";
import { MaterialDropDown } from "../material-dropdown/MaterialDropDown";

export const JourneyTracker = ({
  fn,
  fn2,
  stages = {},
  currentStage = 1,
  settingsTracker = false,
  lang = "",
}) => {
  const [eduActive, setEduActive] = useState(false);
  const [newNotiAsmt, setNewNotiAsmt] = useState(false);

  const currentLang = sessionStorage.getItem("lang");

  if (currentLang !== null) {
    if (currentLang === "en") {
      lang = "en";
    } else if (currentLang === "es") {
      lang = "es";
    }
  }

  const { id = 0, dropdown = [], tracker = [] } = stages;

  const configTrackerArr = () => {
    let trackerRender = sessionStorage.getItem("trackerJ");

    if (trackerRender === null) {
      return tracker.filter((e) => e.status !== "hidden");
    } else {
      return JSON.parse(trackerRender).filter((e) => e.status !== "hidden");
    }
  };

  const checkIfActiveState = (id = 0) => {
    if (id === 1) return true;
    const getTrackers = JSON.parse(sessionStorage.getItem("stagesAcive"));
    let activeState = false;
    if (getTrackers !== null) {
      getTrackers.map((e) => {
        if (e.stage === id && e.active) {
          activeState = true;
        }
      });
    }
    return activeState;
  };

  const checkIfRenderDropdown = () => {
    if (tracker.length) {
      return tracker[0].status === "hidden" && dropdown.length;
    }
  };

  const renderRightIcon = (status, icon, id) => {
    if (settingsTracker) return icon;
    const getActiveStage = JSON.parse(sessionStorage.getItem("stagesAcive"));
    if (getActiveStage !== null) {
      let savedStage = getActiveStage.map((e) => e.stage);
      if (id === 1 && savedStage.some((e) => e === 2)) {
        return icon;
      } else if (savedStage.some((e) => e === id)) {
        return icon;
      } else {
        return <AiFillLock />;
      }
    } else {
      if (id === 1 && currentStage === 1) return icon;
      else return <AiFillLock />;
    }
  };

  let viewProgram = "";
  if (lang === "en") {
    viewProgram = "View Program";
  } else if ((lang = "es")) {
    viewProgram = "Ver Programa";
  }

  const iconColortheme = () => {
    const currentTheme = sessionStorage.getItem("theme") ?? "";
    if (currentTheme === "corp") {
      return "#42bcbe";
    } else {
      return "#5c4bd3";
    }
  };

  return (
    <>
      {checkIfRenderDropdown() ? (
        <div className="dashboard-dropdown-programs">
          <p
            className="text-midText text-title-adjustment"
            style={{ paddingBottom: "1rem" }}
          >
            {viewProgram}
          </p>
          <MaterialDropDown dropdown={dropdown} fn={fn2} />
        </div>
      ) : (
        ""
      )}
      <div className="journey-tracker" id={`journey-tracker-${id}`}>
        {configTrackerArr().length ? (
          configTrackerArr().map((e) => {
            const { id = 0, title = "", icon = "", status = "" } = e;
            return (
              <BoxCard
                setNewNotiAsmt={setNewNotiAsmt}
                customClass={
                  checkIfActiveState(id)
                    ? "dashboard-tracker-cards-active dashboard-tracker-cards"
                    : "dashboard-tracker-cards"
                }
                id={id}
                fn={fn}
                key={id}
                setEduActive={setEduActive}
              >
                <span
                  style={{
                    color: checkIfActiveState(id) ? iconColortheme() : "gray",
                  }}
                  className="journey-tracker-stage"
                >
                  <IconContext.Provider
                    value={{
                      className: "dashboard-tracker-icons",
                    }}
                  >
                    {renderRightIcon(status, icon, id)}
                  </IconContext.Provider>
                </span>
                <p
                  className={`text-smallText dashboard-tracker-texts ${
                    checkIfActiveState(id)
                      ? "dashboard-tracker-texts-active"
                      : ""
                  }`}
                >
                  {(title === "Assessment" || title === "Evaluacion") &&
                  newNotiAsmt ? (
                    <div
                      style={{
                        position: "relative",
                        top: "-42px",
                        right: "11px",
                      }}
                    >
                      {settingsTracker ? (
                        ""
                      ) : (
                        <span className="mobile-icon-new"></span>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                  {title}
                </p>
              </BoxCard>
            );
          })
        ) : (
          <p>Something went wrong, no Journey Stages to show</p>
        )}
      </div>
    </>
  );
};
