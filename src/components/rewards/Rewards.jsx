import React from "react";
import { LinkButton } from "../linkButton/LinkButton";
import { BadgeTrophyFull } from "../badgeTrophy/BadgeTrophyFull";
import { Divider } from "../divider/Divider";
import { BadgeTrophyOutline } from "../badgeTrophy/BadgeTrophyOutline";

export const Rewards = () => {
  return (
    <>
      <div className="dashboard-contents-awards">
        <div className="dash-seeAll">
          <p className="text-title startS-title-text">Recent awards</p>
          <LinkButton text="See All" href="/awards" />
        </div>
        <div className="dashboard-contents-awards-badges">
          <BadgeTrophyFull />
          <BadgeTrophyFull />
          <BadgeTrophyFull />
        </div>
        <Divider customClass="divider-bottom" />
      </div>
      <div className="dashboard-contents-awards-progress">
        <div className="dash-seeAll">
          <p className="text-title startS-title-text">In progress</p>
          <LinkButton text="See All" href="/awards" />
        </div>
        <div className="dashboard-contents-awards-badges">
          <BadgeTrophyOutline />
          <BadgeTrophyOutline />
          <BadgeTrophyOutline />
        </div>
        <div className="bottom-spacer"></div>
      </div>
    </>
  );
};
