export const mockedData = {
  data: 1,
};

export const optInOnboardingSMSData = [
  {
    id: 1,
    type: "ini",
    message: [
      "You've been invited to participate in the COPD Care Program.",
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
      "Great! Here is some helpful information about your condition:",
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
      "Welcome Member to the COPD Care Program!",
      "Complete the Assessment by clicking the link below:",
      "www.client.com/program/assessment",
    ],
    href: "#",
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
    href: "#",
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
    href: "#",
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
    href: "/pollo",
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
    href: "#",
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
    href: "#",
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

export const authInstructions = [
  {
    id: 1,
    step: "one",
    text: "Please confirm your name and date of birth. This should match the details we have for you on file",
  },
  {
    id: 2,
    step: "two",
    text: "Send a code to the email or phone number we have for you on file.",
  },
  {
    id: 3,
    step: "three",
    text: "Enter in the authentication code we sent to +1*******5432",
  },
];

export const authTabs = [
  {
    id: 1,
    label: "Email",
  },
  {
    id: 2,
    label: "Phone",
  },
];
