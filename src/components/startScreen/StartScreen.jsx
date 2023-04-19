import React from "react";
import { PrimaryButton } from "../primaryButton/PrimaryButton";
import { BoxCard } from "../boxCard/BoxCard";
import { ProgressBar } from "../progressBar/ProgressBar";
import { Answers } from "./Answers";
import { BadgeTrophyFull } from "../badgeTrophy/BadgeTrophyFull";
import { LinkButton } from "../linkButton/LinkButton";
import { urlCatch } from "../../utils/scripts";

export const ButtonsStartScreen = ({
  text = "",
  fn,
  customClass = "",
  customClassPrimaryButton = "",
}) => {
  return (
    <div className={`startS-bottom-possition ${customClass}`}>
      <PrimaryButton
        text={text}
        fn={() => fn()}
        customClass={`startS-primary-button ${customClassPrimaryButton}`}
      />
    </div>
  );
};

export const ContentStartScreen = ({ title = "", desc = "" }) => {
  return (
    <div className="startS-texts">
      <h1 className="text-title startS-title-text text-camelCase">{title}</h1>
      <p className="text-smallText startS-small-text-firstScreen">{desc}</p>
    </div>
  );
};

export const ButtonProgressStartScreen = ({
  activeStates = 0,
  text = "",
  fn,
  numPages,
}) => {
  return (
    <BoxCard customClass="startS-bottom-possition ">
      <ProgressBar numPages={numPages} activeState={activeStates} />
      <PrimaryButton text={text} fn={() => fn()} />
    </BoxCard>
  );
};

export const ProgressQuestionsStartScreen = ({
  answerSelection,
  selectAnswer,
  descTitle = "",
  questAnswers = {},
  stage = 0,
}) => {
  const { question, answers } = questAnswers;

  let getActiveAnswer = {};
  if (urlCatch("assessments")) {
    //  getActiveAnswer = JSON.parse(localStorage.getItem("activeQAAsmt"));
  } else if (urlCatch("CheckInsPage")) {
    //   getActiveAnswer = JSON.parse(localStorage.getItem("activeQAchkin"));
  }

  return (
    <div className="startS-contents">
      <p className="text-smallText startS-small-text">{descTitle}</p>
      <p className="text-title">{question}</p>
      <div className="startS-answers">
        {answers.map((elem, i) => {
          let activateAnswer = false;
          /* if (
            stage === getActiveAnswer.stage &&
            i + 1 === getActiveAnswer.num
          ) {
            activateAnswer = true;
          }*/
          return (
            <Answers
              answerSelection={answerSelection}
              answerSelectionNum={i + 1}
              fn={selectAnswer}
              answerSingle={elem}
              key={i}
              activateAnswer={activateAnswer}
            />
          );
        })}
      </div>
      <div className="bottom-spacer"></div>
    </div>
  );
};

export const QuestionsBadge = ({ questionsType = "" }) => {
  return (
    <div className="asmt-contents">
      <div style={{ marginTop: "5rem" }}>
        <p className="text-midText">Great Job Jane!</p>
        <p className="text-midText">
          You have successfully completed your {questionsType}!
        </p>
        <BadgeTrophyFull />
        <p className="text-midText">You've earned the</p>
        <p className="text-title asmt-title-center">
          <span className="text-camelCase">{questionsType}</span> Completition
          Badge!
        </p>
        <LinkButton text="View all Awards" href="/awards" />
      </div>
    </div>
  );
};
