import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const currentLang = sessionStorage.getItem("lang") ?? "en";
let q1 = "";
let q2 = "";
let q3 = "";
let q4 = "";

if (currentLang === "en") {
  q1 = "Have you experienced any difficulty breathing since the last check-in?";
  q2 = "Since the last check-in, have you been short of breath when you walk?";
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

export const DataProvider = ({ children }) => {
  const [asmtAnswers, setAsmtAns] = useState(0);
  const [initialSection, setInitialSection] = useState("one");
  const [activeStates, setActiveStates] = useState([0]);
  const [answerSelection, setAnswerSelection] = useState(0);
  return (
    <DataContext.Provider
      value={{
        asmtAnswers,
        setAsmtAns,
        initialSection,
        setInitialSection,
        activeStates,
        setActiveStates,
        questionsAnswersScreen,
        answerSelection,
        setAnswerSelection,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
