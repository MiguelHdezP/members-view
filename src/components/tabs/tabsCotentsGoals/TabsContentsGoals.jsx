import React from "react";
import "./TabsContentsGoals.scss";
import { goalsTabs } from "../../../data/mockedData";

const InProgressSection = () => {
  return <div>Progress</div>;
};

const CompletedSection = () => {
  return <div>Completed</div>;
};

let goalsContents = [...goalsTabs];

export let TabsContentsGoals = goalsContents.map((ele, i) => {
  if (ele.id === 1) ele.component = <InProgressSection />;
  if (ele.id === 2) ele.component = <CompletedSection />;
  return ele;
});
