import React, { useEffect, useState } from "react";
import "./JourneyTracker.scss";
import { BoxCard } from "../boxCard/BoxCard";
import { IconContext } from "react-icons";
import { AiFillLock } from "react-icons/ai";
import { MaterialDropDown } from "../material-dropdown/MaterialDropDown";

export const JourneyTracker = ({ fn, fn2, stages = {}, currentStage = 1 }) => {
  const [eduActive, setEduActive] = useState(false);
  const { id = 0, dropdown = [], tracker = [] } = stages;

  const configTrackerArr = () => {
    let trackerRender = sessionStorage.getItem("trackerJ");

    if (trackerRender === null) {
      return tracker.filter((e) => e.status !== "hidden");
    } else {
      return JSON.parse(trackerRender).filter((e) => e.status !== "hidden");
    }
  };

  const checkIfActiveState = (status = "", id = 0) => {
    if (status === "active") {
      return true;
    } else if (eduActive && status === "activePassive") {
      return true;
    } else {
      return false;
    }
  };

  const checkIfRenderDropdown = () => {
    if (tracker.length) {
      return tracker[0].status === "hidden" && dropdown.length;
    }
  };

  const renderRightIcon = (status, icon) => {
    if (status === "locked" && currentStage <= 2) {
      return <AiFillLock />;
    } else {
      return icon;
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
            View Program
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
                customClass={
                  checkIfActiveState(status)
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
                    color: checkIfActiveState(status) ? "#5c4bd3" : "gray",
                  }}
                  className="journey-tracker-stage"
                >
                  <IconContext.Provider
                    value={{
                      className: "dashboard-tracker-icons",
                    }}
                  >
                    {renderRightIcon(status, icon)}
                  </IconContext.Provider>
                </span>
                <p
                  className={`text-smallText dashboard-tracker-texts ${
                    checkIfActiveState(status)
                      ? "dashboard-tracker-texts-active"
                      : ""
                  }`}
                >
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
