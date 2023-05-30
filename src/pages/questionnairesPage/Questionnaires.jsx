import React, { useState, useContext, useEffect } from "react";
import "./Questionnaires.scss";
import { DataContext } from "../../data/context/dataContext";
import { urlCatch, redirect } from "../../utils/scripts";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { ButtonsStartScreen } from "../../components/startScreen/StartScreen";
import { QuestionsAnswers } from "./QuestionsAnswers";
import { ButtonProgressStartScreen } from "../../components/startScreen/StartScreen";
import { ContentStartScreen } from "../../components/startScreen/StartScreen";
import { QuestionsBadge } from "../../components/startScreen/StartScreen";
import { LoaderSection } from "../../components/loaderSection/LoaderSection";
import Confetti from "react-confetti";

const currentLang = sessionStorage.getItem("lang") ?? "en";

export const Questionnaires = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);
  const [stage, setStage] = useState(0);
  const [removeConfetti, setRemoveConfetti] = useState(true);

  const {
    activeStates,
    setActiveStates,
    answerSelection,
    setAnswerSelection,
    questionsAnswersScreen,
  } = useContext(DataContext);
  let questionsAndAnswers = [];
  let qaType = "";
  let qaStartTitle = "";
  let qaStartDesc = "";
  let qaStoreAnswersType = "";
  let nextTitle = "";
  let returnDash = "";
  let qaTypeTitle = "";

  if (urlCatch("assessments")) {
    if (currentLang === "en") {
      qaType = "assessments";
      qaTypeTitle = "Assessments";
      qaStoreAnswersType = "asmt";
      qaStartTitle = "Assessment Start Screen";
      qaStartDesc = "Description of what this is and why its needed.";
      questionsAndAnswers = questionsAnswersScreen[0];
      nextTitle = "Next";
      returnDash = "Return to Care Journey Dashboard";
    } else if (currentLang === "es") {
      qaType = "assessments";
      qaTypeTitle = "Evaluaciones";
      qaStoreAnswersType = "asmt";
      qaStartTitle = "Inicio de Evaluación";
      qaStartDesc = "Descripción del por qué ésto es necesario.";
      questionsAndAnswers = questionsAnswersScreen[0];
      nextTitle = "Siguiente";
      returnDash = "Regresar al Dashboard";
    }
  } else if (urlCatch("CheckInsPage")) {
    if (currentLang === "en") {
      qaType = "Periodic Check In";
      qaTypeTitle = "Periodic Check In";
      qaStoreAnswersType = "chkin";
      qaStartTitle = "Periodic Check In";
      qaStartDesc = "We want to hear about how your COPD management is going.";
      questionsAndAnswers = questionsAnswersScreen[1];
      nextTitle = "Next";
      returnDash = "Return to Care Journey Dashboard";
    } else if (currentLang === "es") {
      qaType = "Periodic Check In";
      qaTypeTitle = "Revisiones Periódicas";
      qaStoreAnswersType = "chkin";
      qaStartTitle = "Revisión Periódica";
      qaStartDesc = "Queremos saber cómo va su manejo de la EPOC.";
      questionsAndAnswers = questionsAnswersScreen[1];
      nextTitle = "Siguiente";
      returnDash = "Regresar al Dashboard";
    }
  }

  const toggleHeaderPanels = (action) => {
    if (action === "notifi") {
      if (toggleFavs) setToggleFavs(!toggleFavs);
      setToggleNotifActive(!toggleNotifActive);
    } else if (action === "favs") {
      if (toggleNotifActive) setToggleNotifActive(!toggleNotifActive);
      setToggleFavs(!toggleFavs);
    }
  };

  const selectAnswer = (num) => {
    setAnswerSelection(num);
  };

  let numberOfPages = questionsAndAnswers.length;

  const renderStage = () => {
    let actionsBtns;
    let contents;

    if (stage === 0) {
      actionsBtns = (
        <ButtonsStartScreen
          text={nextTitle}
          fn={() => {
            setStage(stage + 1);
          }}
        />
      );
      contents = <ContentStartScreen title={qaStartTitle} desc={qaStartDesc} />;
    } else if (stage === numberOfPages + 1) {
      actionsBtns = (
        <ButtonsStartScreen
          text={returnDash}
          fn={() => redirect("/dashboard?q=single")}
          customClassPrimaryButton="qa-primary-button"
        />
      );
      contents = <QuestionsBadge questionsType={qaType} />;
      localStorage.setItem("dashboardQA", numberOfPages);
      setTimeout(() => {
        setRemoveConfetti(false);
      }, 4000);
    } else {
      actionsBtns = (
        <ButtonProgressStartScreen
          activeStates={activeStates}
          text="Next"
          fn={() => {
            setActiveStates([...activeStates, stage]);
            setStage(stage + 1);
          }}
          numPages={numberOfPages}
        />
      );
      contents = (
        <QuestionsAnswers
          answerSelection={answerSelection}
          selectAnswer={selectAnswer}
          descTitle={qaTypeTitle}
          questAnswers={questionsAndAnswers[stage]}
          stage={stage}
        />
      );
    }
    return { actionsBtns, contents };
  };

  const runLoader = () => {
    setTimeout(() => {
      setStage(numberOfPages + 1);
    }, 1400);
    return <LoaderSection />;
  };

  return (
    <MobileContainer>
      <Header
        toggleNotifActive={toggleNotifActive}
        toggleFavs={toggleFavs}
        toggleHeaderPanels={toggleHeaderPanels}
      />
      {stage === numberOfPages ? runLoader() : ""}
      <div className="mobile-scroll-qa">
        {stage >= numberOfPages ? (
          removeConfetti ? (
            <div className="confetti-container">
              <Confetti />
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
        <section className="qa-page">
          <div className="qa-page-contents">
            {stage === numberOfPages ? "" : renderStage().contents}
          </div>
        </section>
      </div>
      {renderStage().actionsBtns}
    </MobileContainer>
  );
};
