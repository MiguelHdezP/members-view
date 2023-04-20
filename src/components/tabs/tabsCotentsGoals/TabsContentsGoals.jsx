import React from "react";
import "./TabsContentsGoals.scss";
import { goalsTabs } from "../../../data/mockedData";
import { BoxCard } from "../../boxCard/BoxCard";

const InProgressSection = () => {
  return (
    <div className="tabs-goals">
      <BoxCard customClass="tabs-goals-card">
        <p className="text-midText startS-title-text tabs-goals-textLeft">
          Schedule virtual appointments with my care manager
        </p>
        <span className="text-smallText tabs-goals-pill-careplan reset-margin">
          Care Plan
        </span>
      </BoxCard>
      <BoxCard customClass="tabs-goals-card">
        <p className="text-midText startS-title-text tabs-goals-textLeft">
          Make healthy food choices and learn more about the diabetic diet
        </p>
        <span className="text-smallText tabs-goals-pill-careplan reset-margin">
          Care Plan
        </span>
      </BoxCard>
      <BoxCard customClass="tabs-goals-card startS-title-text">
        <p className="ext-midText startS-title-text tabs-goals-textLeft">
          Eat less fast food
        </p>
        <span className="text-smallText tabs-goals-pill-personal reset-margin">
          Personal
        </span>
      </BoxCard>
    </div>
  );
};

const CompletedSection = () => {
  return (
    <div className="tabs-goals">
      <BoxCard customClass="tabs-goals-card">
        <p className="text-midText startS-title-text tabs-goals-textLeft">
          Schedule virtual appointments with my care manager
        </p>
        <span className="text-smallText tabs-goals-pill-careplan reset-margin">
          Care Plan
        </span>
      </BoxCard>
      <BoxCard customClass="tabs-goals-card">
        <p className="text-midText startS-title-text tabs-goals-textLeft">
          Make healthy food choices and learn more about the diabetic diet
        </p>
        <span className="text-smallText tabs-goals-pill-careplan reset-margin">
          Care Plan
        </span>
      </BoxCard>
      <BoxCard customClass="tabs-goals-card startS-title-text">
        <p className="ext-midText startS-title-text tabs-goals-textLeft">
          Eat less fast food
        </p>
        <span className="text-smallText tabs-goals-pill-personal reset-margin">
          Personal
        </span>
      </BoxCard>
    </div>
  );
};

let goalsContents = [...goalsTabs];

export let TabsContentsGoals = goalsContents.map((ele, i) => {
  if (ele.id === 1) ele.component = <InProgressSection />;
  if (ele.id === 2) ele.component = <CompletedSection />;
  return ele;
});
