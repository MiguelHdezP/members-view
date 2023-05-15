// @ts-nocheck
import React, { useEffect, useState } from "react";
import { JourneyTracker } from "../../components/journey-tracker/JourneyTracker";
import { DashboardContents } from "../../data/dashboardData";

//sessionStorage.setItem("tasksProgress", JSON.stringify([false, true, false]));

export const DashboardTest = () => {
  const [renderStageJourneyTracker, setRenderStageJourneyTracker] = useState(1);
  const [renderConditionDash, setRenderConditionDash] = useState(0);
  let DashboardContentsArr = DashboardContents(
    renderStageJourneyTracker,
    renderConditionDash,
    setRenderStageJourneyTracker
  );

  useEffect(() => {
    console.log("conditionEffect: ", renderConditionDash);
  }, [renderStageJourneyTracker, renderConditionDash]);
  console.log("condition: ", renderConditionDash);

  return (
    <>
      <div>
        <JourneyTracker
          stages={DashboardContentsArr.jTracker}
          fn={setRenderStageJourneyTracker}
          fn2={setRenderConditionDash}
        />
      </div>
      <div>Render {renderStageJourneyTracker}</div>
      <div>RenderCondition {renderConditionDash}</div>
      {DashboardContentsArr.renderConts}
    </>
  );
};
