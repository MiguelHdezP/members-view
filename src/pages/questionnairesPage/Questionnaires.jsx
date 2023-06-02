import React, { useState } from "react";
import "./Questionnaires.scss";
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
import { urlGetQueryString } from "../../utils/scripts";

const currentLang = sessionStorage.getItem("lang") ?? "en";

export const Questionnaires = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);
  const [stage, setStage] = useState(0);
  const [removeConfetti, setRemoveConfetti] = useState(true);
  const [activeStates, setActiveStates] = useState([0]);
  const [answerSelection, setAnswerSelection] = useState(0);

  const currentLang = sessionStorage.getItem("lang") ?? "en";
  let q1 = "";
  let q2 = "";
  let q3 = "";
  let q4 = "";

  if (currentLang === "en") {
    q1 =
      "Have you experienced any difficulty breathing since the last check-in?";
    q2 =
      "Since the last check-in, have you been short of breath when you walk?";
    q3 = "Have you needed to use your inhaler since the last check-in?";
    q4 = "Have you noticed any wheezing since the last check-in?";
  } else if (currentLang === "es") {
    q1 =
      "¿Ha experimentado alguna dificultad para respirar desde el último check-in?";
    q2 = "Desde el último check-in, ¿le ha faltado el aire al caminar?";
    q3 = "¿Ha necesitado usar su inhalador desde el último check-in?";
    q4 = "¿Ha notado sibilancias desde el último check-in?";
  }

  const questionsAnswersScreen = [
    [
      {
        question: q1,
        answers: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        ],
        activeQA: false,
      },
      {
        question: q2,
        answers: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        ],
        activeQA: true,
      },
      {
        question: q3,
        answers: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        ],
        activeQA: false,
      },
      {
        question: q4,
        answers: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        ],
        activeQA: false,
      },
    ],
    [
      {
        question: "How are you feeling today?",
        answers: [
          "Great",
          "Good",
          "The same as before",
          "Not well",
          "Really bad",
        ],
        activeQA: false,
      },
      {
        question:
          "Have you been experiencing any shortness of breath or coughing?",
        answers: ["Yes", "No"],
        activeQA: false,
      },
      {
        question: "How are you feeling today?",
        answers: [
          "Great",
          "Good",
          "The same as before",
          "Not well",
          "Really bad",
        ],
        activeQA: false,
      },
      {
        question:
          "Have you been experiencing any shortness of breath or coughing?",
        answers: ["Yes", "No"],
        activeQA: false,
      },
    ],
  ];

  let questionsAndAnswers = [];
  let qaType = "";
  let qaStartTitle = "";
  let qaStartDesc = "";
  let qaStoreAnswersType = "";
  let nextTitle = "";
  let returnDash = "";
  let qaTypeTitle = "";

  let typeAsmt = "";

  if (urlCatch("assessments")) {
    if (currentLang === "en") {
      if (urlGetQueryString() === "copd") {
        typeAsmt = "COPD ";
      } else if (urlGetQueryString() === "hypertension") {
        typeAsmt = "Hypertension ";
      } else if (urlGetQueryString() === "diabetes") {
        typeAsmt = "Diabetes ";
      }
      qaType = "assessments";
      qaTypeTitle = typeAsmt + "Assessments";
      qaStoreAnswersType = "asmt";
      qaStartTitle = typeAsmt + "Assessment Start Screen";
      qaStartDesc = "Description of what this is and why its needed.";
      questionsAndAnswers = questionsAnswersScreen[0];
      nextTitle = "Next";
      returnDash = "Return to Care Journey Dashboard";
    } else if (currentLang === "es") {
      if (urlGetQueryString() === "copd") {
        typeAsmt = " de EPOC";
      } else if (urlGetQueryString() === "hypertension") {
        typeAsmt = "de Hipertensión ";
      } else if (urlGetQueryString() === "diabetes") {
        typeAsmt = "de Diabetes ";
      }
      qaType = "assessments";
      qaTypeTitle = "Evaluación" + typeAsmt;
      qaStoreAnswersType = "asmt";
      qaStartTitle = "Inicio de Evaluación" + typeAsmt;
      qaStartDesc = "Descripción del por qué ésto es necesario.";
      questionsAndAnswers = questionsAnswersScreen[0];
      nextTitle = "Siguiente";
      returnDash = "Regresar al Dashboard";
    }
  } else if (urlGetQueryString() === "CheckInsPage") {
    if (currentLang === "en") {
      if (urlGetQueryString() === "diabetes") {
        typeAsmt = "Diabetes ";
      }
      qaType = "Periodic Check In";
      qaTypeTitle = typeAsmt + "Periodic Check In";
      qaStoreAnswersType = "chkin";
      qaStartTitle = typeAsmt + "Periodic Check In";
      qaStartDesc = "We want to hear about how your COPD management is going.";
      questionsAndAnswers = questionsAnswersScreen[1];
      nextTitle = "Next";
      returnDash = "Return to Care Journey Dashboard";
    } else if (currentLang === "es") {
      if (urlCatch("diabetes")) {
        typeAsmt = "de Diabetes ";
      }
      qaType = "Periodic Check In";
      qaTypeTitle = "Revisiones Periódicas" + typeAsmt;
      qaStoreAnswersType = "chkin";
      qaStartTitle = "Revisión Periódica" + typeAsmt;
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
