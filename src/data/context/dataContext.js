import React, { createContext, useState, useEffect, Profiler } from "react";

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

  const [startState, setStartState] = useState(false);
  const [startState2, setStartState2] = useState(false);
  const [startState3, setStartState3] = useState(false);
  const [startState4, setStartState4] = useState(false);
  const [startState5, setStartState5] = useState(false);
  const [startState6, setStartState6] = useState(false);
  const [addToFavs, setAddToFavs] = useState([]);

  const toggleFavStar = (num, provFaves) => {
    switch (num) {
      case 1:
        if (provFaves.length) {
          if (provFaves.some((e) => e === num)) {
            setStartState(true);
          } else {
            setStartState(false);
          }
        } else {
          setStartState(!startState2);
        }
        break;
      case 2:
        if (provFaves.length) {
          if (provFaves.some((e) => e === num)) {
            setStartState2(true);
          } else {
            setStartState2(false);
          }
        } else {
          setStartState2(!startState2);
        }
        break;
      case 3:
        if (provFaves.length) {
          if (provFaves.some((e) => e === num)) {
            setStartState3(true);
          } else {
            setStartState3(false);
          }
        } else {
          setStartState3(!startState3);
        }
        break;
      case 4:
        if (provFaves.length) {
          if (provFaves.some((e) => e === num)) {
            setStartState4(true);
          } else {
            setStartState4(false);
          }
        } else {
          setStartState4(!startState4);
        }
        break;
      case 5:
        if (provFaves.length) {
          if (provFaves.some((e) => e === num)) {
            setStartState5(true);
          } else {
            setStartState5(false);
          }
        } else {
          setStartState5(!startState5);
        }
        break;
      case 6:
        if (provFaves.length) {
          if (provFaves.some((e) => e === num)) {
            setStartState6(true);
          } else {
            setStartState6(false);
          }
        } else {
          setStartState6(!startState6);
        }
        break;
      default:
        break;
    }
  };

  const addContentToFavs = (num) => {
    console.log("---DAta Context Favs---: ", num);
    console.log("DAta startState2: ", startState2);

    let getNewFavs = JSON.parse(sessionStorage.getItem("currentFavs"));
    let provFaves = addToFavs;

    if (getNewFavs !== null) {
      provFaves = getNewFavs;
    }

    if (!provFaves.some((e) => e === num)) {
      console.log("Add new fav: ", num, provFaves);
      setAddToFavs((prev) => [...prev, num]);
      sessionStorage.setItem(
        "currentFavs",
        JSON.stringify([...provFaves, num])
      );
      toggleFavStar(num, provFaves);
    } else {
      console.log("Remove new fav: ", num, provFaves);
      let removeRepeteadFavs = provFaves.filter((e) => e !== num);
      sessionStorage.setItem(
        "currentFavs",
        JSON.stringify([...removeRepeteadFavs])
      );
      setAddToFavs([...removeRepeteadFavs]);
      toggleFavStar(num, removeRepeteadFavs);
    }
  };

  useEffect(() => {
    console.log("DAta context change registered");
  }, [
    addToFavs,
    startState,
    startState2,
    startState3,
    startState4,
    startState5,
    startState6,
  ]);
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
        addContentToFavs,
        setStartState,
        setStartState2,
        setStartState3,
        setStartState4,
        setStartState5,
        setStartState6,
        startState,
        startState2,
        startState3,
        startState4,
        startState5,
        startState6,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
