import React from "react";
import { SMSsimulator } from "./smsSimulation/SMSsimulator";
import "./Pages.scss";
import {
  optInOnboardingSMSData,
  userResponses,
  assessmentData,
  checkins,
  educationalContent,
} from "../data/mockedData";

export const Optinonboarding = () => {
  return (
    <SMSsimulator
      SMSdata={optInOnboardingSMSData}
      userResponses={userResponses}
    />
  );
};

export const Assessments = () => {
  return (
    <SMSsimulator SMSdata={assessmentData} userResponses={userResponses} />
  );
};

export const CheckIns = () => {
  return <SMSsimulator SMSdata={checkins} userResponses={userResponses} />;
};

export const EducationalContent = () => {
  return (
    <SMSsimulator SMSdata={educationalContent} userResponses={userResponses} />
  );
};
