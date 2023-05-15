import React from "react";
import { ProgressQuestionsStartScreen } from "../../components/startScreen/StartScreen";

export const QuestionsAnswers = ({
  answerSelection,
  selectAnswer,
  descTitle = "",
  questAnswers = {},
  stage = 0,
}) => {
  return (
    <ProgressQuestionsStartScreen
      answerSelection={answerSelection}
      selectAnswer={selectAnswer}
      descTitle={descTitle}
      questAnswers={questAnswers}
      stage={stage}
    />
  );
};
