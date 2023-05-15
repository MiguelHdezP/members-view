import React from "react";
import "./ContentCard.scss";
import { BoxCard } from "../boxCard/BoxCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { redirect } from "../../utils/scripts";
import { HiOutlineChevronRight } from "react-icons/hi";
import { IconContext } from "react-icons";
import { StatusFlag } from "../statusFlag/StatusFlag";

export const ContentCard = ({
  progress = 0,
  title = "",
  desc = "",
  eduTotalContents = 0,
  type = "",
  redirectPath = "",
  IconImg = <div></div>,
}) => {
  let progressColor = "";
  let provProgress = 0;

  const leftImg = () => {
    if (type === "progress") {
      if (progress === 0) {
        desc = "Not Started";
        return <StatusFlag flagLabel="New" classStatus="flag-active" />;
      } else if (progress === 100) {
        progressColor = "#00a223";
        desc = "Completed";
      } else if (progress > 10) {
        progressColor = "#ffa500";
        desc = "In Progress";
      } else {
        provProgress = (progress * 100) / eduTotalContents;
        progressColor = "#5c4bd3";
        desc = "In Progress";
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
    } else if (type === "none") {
      return "";
    }
  };

  return (
    <BoxCard customClass="almost-cards">
      <div
        className="almost-cards-contents almost-cards-loader"
        onClick={() => redirect(`/${redirectPath}`)}
      >
        {type === "none" ? (
          ""
        ) : (
          <div className="almost-cards-loader-icon">
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
