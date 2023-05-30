import React from "react";
import "./ContentCard.scss";
import { BoxCard } from "../boxCard/BoxCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { redirect } from "../../utils/scripts";
import { HiOutlineChevronRight } from "react-icons/hi";
import { IconContext } from "react-icons";
import { StatusFlag } from "../statusFlag/StatusFlag";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let notStarted = "";
let completed = "";
let inProgress = "";
let isOverdue = "";
let isPaused = "";
let isNew = "";

if (currentLang === "en") {
  notStarted = "Not Started";
  completed = "Completed";
  inProgress = "In Progrss";
  isOverdue = "Overdue";
  isPaused = "Paused";
  isNew = "New";
} else if (currentLang === "es") {
  notStarted = "Sin iniciar";
  completed = "Completado";
  inProgress = "En Progreso";
  isOverdue = "Atrasado";
  isPaused = "Pausado";
  isNew = "Nuevo";
}

export const ContentCard = ({
  progress = 0,
  title = "",
  desc = "",
  eduTotalContents = 0,
  type = "",
  redirectPath = "",
  IconImg = <div></div>,
  fn,
  stage,
}) => {
  let progressColor = "";
  let provProgress = 0;

  const handleFn = () => {
    if (redirectPath.length) {
      redirect(redirectPath);
    }
    console.log("Card stage: ", stage);
    if (stage === 2) {
      fn(5);
    }
    if (stage === 3) {
      fn(7);
    }
  };
  const leftImg = () => {
    if (type === "progress") {
      if (progress === 0) {
        desc = desc.length ? "" : notStarted;
        return <StatusFlag flagLabel={isNew} classStatus="flag-active" />;
      } else if (progress === 100) {
        progressColor = "#00a223";
        desc = desc.length ? "" : completed;
      } else if (progress > 10) {
        progressColor = "#ffa500";
        desc = desc.length ? "" : inProgress;
      } else {
        provProgress = (progress * 100) / eduTotalContents;
        progressColor = "#5c4bd3";
        desc = desc.length ? "" : inProgress;
      }
      return (
        <CircularProgressbar
          value={provProgress || progress}
          text={
            eduTotalContents
              ? `${progress}/${eduTotalContents}`
              : `${progress}%`
          }
          styles={buildStyles({
            textSize: "1.5rem",
            pathColor: progressColor,
            textColor: progressColor,
            trailColor: "#d6d6d6",
            backgroundColor: "white",
          })}
        />
      );
    } else if (type === "icon") {
      return (
        <IconContext.Provider
          value={{
            className: "icon-img",
          }}
        >
          <IconImg />
        </IconContext.Provider>
      );
    } else if (type === "overdue") {
      desc = notStarted;
      return <StatusFlag flagLabel={isOverdue} classStatus="flag-overdue" />;
    } else if (type === "paused") {
      desc = "";
      return <StatusFlag flagLabel={isPaused} classStatus="flag-paused" />;
    } else if (type === "none") {
      return "";
    }
  };

  return (
    <BoxCard customClass="almost-cards">
      <div
        className="almost-cards-contents almost-cards-loader"
        onClick={handleFn}
      >
        {type === "none" ? (
          ""
        ) : (
          <div
            className="almost-cards-loader-icon"
            style={type === "overdue" ? { marginRight: "1rem" } : {}}
          >
            <div className={`cards-loader-icon ${progress > 0 ? "pollo" : ""}`}>
              {leftImg()}
            </div>
          </div>
        )}
        <div className="almost-titles">
          <p className="text-midText amost-nob">{title}</p>
          {desc.length ? (
            <p className="text-smallText-contentCard amost-nob">{desc}</p>
          ) : (
            ""
          )}
        </div>
        <div className="almost-chevron">
          <HiOutlineChevronRight />
        </div>
      </div>
    </BoxCard>
  );
};
