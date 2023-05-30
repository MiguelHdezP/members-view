import React from "react";
import { LinkButton } from "../linkButton/LinkButton";
import { BadgeTrophyFull } from "../badgeTrophy/BadgeTrophyFull";
import { Divider } from "../divider/Divider";
import { BadgeTrophyOutline } from "../badgeTrophy/BadgeTrophyOutline";
import { AwardsGreenImg, AwardsPurpleImg } from "../../data/images";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let seeAll = "";
let recentAwards = "";
let inProgress = "";

if (currentLang === "en") {
  seeAll = "See All";
  recentAwards = "Recent Awards";
  inProgress = "In Progress";
} else if (currentLang === "es") {
  seeAll = "Ver Todos";
  recentAwards = "Premios Recientes";
  inProgress = "En Progreso";
}

export const Rewards = () => {
  return (
    <>
      <div className="dashboard-contents-awards">
        <div className="dash-seeAll">
          <p className="text-title startS-title-text">{recentAwards}</p>
          <LinkButton text={seeAll} href="/awards" />
        </div>
        <div className="dashboard-contents-awards-badges">
          <img
            src={AwardsGreenImg}
            alt=""
            style={{ height: "5rem", width: "5rem" }}
          />
          <img
            src={AwardsGreenImg}
            alt=""
            style={{ height: "5rem", width: "5rem" }}
          />
          <img
            src={AwardsGreenImg}
            alt=""
            style={{ height: "5rem", width: "5rem" }}
          />
        </div>
        <Divider customClass="divider-bottom" />
      </div>
      <div className="dashboard-contents-awards-progress">
        <div className="dash-seeAll">
          <p className="text-title startS-title-text">{inProgress}</p>
          <LinkButton text={seeAll} href="/awards" />
        </div>
        <div className="dashboard-contents-awards-badges">
          <img
            src={AwardsPurpleImg}
            alt=""
            style={{ height: "5rem", width: "5rem" }}
          />
          <img
            src={AwardsPurpleImg}
            alt=""
            style={{ height: "5rem", width: "5rem" }}
          />
          <img
            src={AwardsPurpleImg}
            alt=""
            style={{ height: "5rem", width: "5rem" }}
          />
        </div>
        <div className="bottom-spacer"></div>
      </div>
    </>
  );
};
