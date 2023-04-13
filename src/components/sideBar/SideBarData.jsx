import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    id: 1,
    title: "Journey Builder",
    path: "/",
  },
  {
    id: 2,
    title: "Care Manager",
    path: "/caremanager",
  },
  {
    id: 3,
    title: "Member's view",
    path: "",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Opt-in & Onboarding",
        path: "/memberview/optinonboarding",
      },
      {
        title: "Assessment",
        path: "/memberview/assessments",
      },
      {
        title: "Check-ins",
        path: "/memberview/checkins",
      },
      {
        title: "Educational Content",
        path: "/memberview/educationalContent",
      },
    ],
  },
];
