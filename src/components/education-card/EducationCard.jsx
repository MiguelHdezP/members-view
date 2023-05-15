import React from "react";
import "./EducationCard.scss";
import { RoundedCard } from "../roundedCard/RoundedCard";
import { IconContext } from "react-icons";
import { AiOutlineStar } from "react-icons/ai";

export const EducationCard = ({
  thumbnail,
  eduCardtitle = "",
  eduCardDesc = "",
  eduCardTime = "",
}) => {
  return (
    <RoundedCard customClass="education-rounded-card">
      <IconContext.Provider
        value={{
          className: "button-card-star-inprogress",
        }}
      >
        <button
          title="Add to favorites"
          className="button-card-favs"
          onClick={() => ""}
        >
          {<AiOutlineStar />}
        </button>
      </IconContext.Provider>
      <img
        src={thumbnail}
        alt={eduCardtitle}
        className="image-top-roundedCorners img-tint-dark"
      />
      <div className="education-todo-texts">
        <p
          className="text-midText education-semibold-text education-text-mid"
          style={{ textAlign: "left" }}
        >
          {eduCardtitle}
        </p>
        <p
          className="text-midText education-text-mid"
          style={{ textAlign: "left" }}
        >
          {eduCardDesc}
        </p>
        <p
          className="text-smallText education-purple-text education-text-mid"
          style={{ textAlign: "left" }}
        >
          {eduCardTime}
        </p>
      </div>
    </RoundedCard>
  );
};
