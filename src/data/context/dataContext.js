import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const questionsAnswersScreen = [
  [
    {
      question:
        "Have you experienced any difficulty breathing since the last check-in?",
      answers: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      ],
      activeQA: false,
    },
    {
      question:
        "Since the last check-in, have you been short of breath when you walk?",
      answers: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      ],
      activeQA: true,
    },
    {
      question: "Have you needed to use your inhaler since the last check-in?",
      answers: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      ],
      activeQA: false,
    },
    {
      question: "Have you noticed any wheezing since the last check-in?",
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
