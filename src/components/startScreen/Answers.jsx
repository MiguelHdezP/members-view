import React from "react";
import { RoundedCard } from "../roundedCard/RoundedCard";

export const Answers = ({
  answerSelection,
  answerSelectionNum = 0,
  fn,
  answerSingle = "",
  activateAnswer = false,
}) => {
  return (
    <RoundedCard
      customClass={`startS-roundedCard ${
        answerSelection === answerSelectionNum ? "active-answer" : ""
      } ${activateAnswer ? "active-answer" : ""}`}
      fn={() => fn(answerSelectionNum)}
    >
      {answerSingle}
    </RoundedCard>
  );
};
