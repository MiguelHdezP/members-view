import React from "react";
import { IoCalendar } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

export const mockedData = {
  data: 1,
};

export const optInOnboardingSMSData = [
  {
    id: 1,
    type: "ini",
    message: [
      "You've been invited to participate in a Care Program.",
      "Reply YES to opt in",
      "Reply NO to opt out",
      "STOP cancels anytime. Msg & Data rates my apply",
    ],
    href: "",
    img: "",
    classN: "",
  },
  {
    id: 2,
    type: "yes",
    message: [
      "Great! Here is some helpful information about your Care Program:",
      "www.client.com/program/education",
    ],
    href: "/memberview/optinonboarding/authentication",
    img: "www.client.com/program/education",
    classN: "",
  },
  {
    id: 3,
    type: "no",
    message: ["Custom message if the answer is NO"],
    href: "",
    img: "",
    classN: "",
  },
  {
    id: 4,
    type: "any",
    message: ["Sorry, please only answer YES or NO"],
    href: "",
    img: "",
    classN: "",
  },
];

export const assessmentData = [
  {
    id: 1,
    type: "yes",
    message: [
      "Welcome Member to a Care Program!",
      "Complete the Assessment by clicking the link below:",
      "www.client.com/program/assessment",
    ],
    href: "/assessments",
    img: "www.client.com/program/assessment",
    classN: "tight-text",
  },
  {
    id: 2,
    type: "no",
    message: ["Do you want to exit", "the program? yes/no"],
    href: "",
    img: "",
    classN: "tight-text",
  },
  {
    id: 3,
    type: "any",
    message: [
      "No further actions are required, just follow the link:",
      "www.client.com/program/assessment",
    ],
    href: "/assessments",
    img: "www.client.com/program/assessment",
    classN: "tight-text",
  },
];

export const checkins = [
  {
    id: 1,
    type: "yes",
    message: [
      "Hi Member! How are you?  We have a check in for you yo complete:",
      "www.client.com/program/check-in",
    ],
    href: "/memberview/CheckInsPage",
    img: "www.client.com/program/check-in",
    classN: "tight-text",
  },
  {
    id: 2,
    type: "no",
    message: ["Do you want to exit", "the program? yes/no"],
    href: "",
    img: "",
    classN: "tight-text",
  },
  {
    id: 3,
    type: "any",
    message: [
      "To follow up, click the",
      "provided link",
      "www.client.com/program/check-in",
    ],
    href: "/memberview/CheckInsPage",
    img: "www.client.com/program/check-in",
    classN: "tight-text",
  },
];

export const educationalContent = [
  {
    id: 1,
    type: "yes",
    message: [
      "Hi Member! How are you?  We have new educational content for you:",
      "www.client.com/program/education",
    ],
    href: "/education",
    img: "www.client.com/program/education",
    classN: "tight-text",
  },
  {
    id: 2,
    type: "no",
    message: ["Do you want to exit", "the program? yes/no"],
    href: "",
    img: "",
    classN: "tight-text",
  },
  {
    id: 3,
    type: "any",
    message: [
      "To follow up click the link:",
      "www.client.com/program/education",
    ],
    href: "/education",
    img: "www.client.com/program/education",
    classN: "tight-text",
  },
];

export const userResponses = [
  {
    id: 11,
    type: "",
    message: [""],
    href: "",
    img: "",
  },
];

const currentLang = sessionStorage.getItem("lang") ?? "en";
let emailTab = "";
let phoneTab = "";
let activeChatsTab = "";
let archivedTab = "";
let inProgressTab = "";
let completedTab = "";
let inReviewTab = "";
let auth1 = "";
let auth2 = "";
let auth3 = "";

if (currentLang === "en") {
  emailTab = "Email";
  phoneTab = "Teléfono";
  activeChatsTab = "Active Chats";
  archivedTab = "Archived";
  inProgressTab = "In Progress";
  completedTab = "Completed";
  inReviewTab = "In Review";
  auth1 =
    "Please confirm your name and date of birth. This should match the details we have for you on file";
  auth2 = "Send a code to the email or phone number we have for you on file.";
  auth3 = "Enter in the authentication code we sent to +1*******5432";
} else if (currentLang === "es") {
  phoneTab = "Teléfono";
  activeChatsTab = "Chats Activos";
  archivedTab = "Archivados";
  inProgressTab = "En Progreso";
  completedTab = "Completado";
  inReviewTab = "En Revisión";
  auth1 =
    "Por favor confirma tu nombre y año de nacimiento, deben ser iguales a los datos que tenemos guardados";
  auth2 = "Envía un código a tu email o teléfono registrado.";
  auth3 = "Ingresa el código enviado al +1*******5432";
}

export const authInstructions = [
  {
    id: 1,
    step: "one",
    text: auth1,
  },
  {
    id: 2,
    step: "two",
    text: auth2,
  },
  {
    id: 3,
    step: "three",
    text: auth3,
  },
];

export const authTabs = [
  {
    id: 1,
    label: emailTab,
  },
  {
    id: 2,
    label: phoneTab,
  },
];

export const chatTabs = [
  {
    id: 1,
    label: activeChatsTab,
  },
  {
    id: 2,
    label: archivedTab,
  },
];

export const goalsTabs = [
  {
    id: 1,
    label: inProgressTab,
  },
  {
    id: 2,
    label: completedTab,
  },
];

export const careVisitTabs = [
  {
    id: 1,
    label: inProgressTab,
  },
  {
    id: 2,
    label: inReviewTab,
  },
  {
    id: 3,
    label: completedTab,
  },
];

export const listActivity = [
  {
    id: 1,
    iconText: "MJ",
    icon: null,
    title: "Dr. Wall, Jeff sent you a message",
    textComplement: "Hi there, I wanted to reach out and ask...",
    helperText: "Chat",
    newMsg: true,
  },
  {
    id: 2,
    iconText: "",
    icon: <IoCalendar />,
    title: "Periodic Check-In Reminder",
    textComplement: "En Mar 22 a las 2:30pm tienes una...",
    helperText: "Appointments",
    newMsg: true,
  },
  {
    id: 3,
    iconText: "",
    icon: <AiFillStar />,
    title: "¡Súper! Tienes una nueva insignia",
    textComplement: "Has completado un nuevo reto re...",
    helperText: "Trophies",
    newMsg: true,
  },
  {
    id: 4,
    iconText: "MJ",
    icon: null,
    title: "Dr. Wall, Jeff sent you a message",
    textComplement: "Bienvenido al programa...",
    helperText: "Chat",
    newMsg: false,
  },
  {
    id: 5,
    iconText: "",
    icon: <IoCalendar />,
    title: "Assessment Reminder",
    textComplement: "On Mar 10 at 2:30pm you have an upcoming...",
    helperText: "Appointments",
    newMsg: false,
  },
];
