import React from "react";
import "./EduCopdContents.scss";
import { BoxCard } from "../../../components/boxCard/BoxCard";
import { COPDb1, COPDb2, COPDb3, COPDb4, COPDb5 } from "../../../data/images";
import { redirect } from "../../../utils/scripts";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let eduActis = "";
let learnMoreDesc = "Lorem ipsum dolor sit amet, consectetur.";

if (currentLang === "en") {
  eduActis = "Browse Content";
} else if (currentLang === "es") {
  eduActis = "Explorar Contenido";
}

const eduContents = [
  {
    id: 1,
    img: COPDb1,
    title: "COPD: What is it?",
    desc: "Online description",
  },
  {
    id: 2,
    img: COPDb2,
    title: "COPD: Medications",
    desc: "Online description",
  },
  {
    id: 3,
    img: COPDb3,
    title: "COPD Overview",
    desc: "Online description",
  },
  {
    id: 4,
    img: COPDb4,
    title: "COPD Diet",
    desc: "Online description",
  },
  {
    id: 5,
    img: COPDb5,
    title: "Risk Factors of COPD",
    desc: "Online description",
  },
];

export const EduCopdContents = ({ search = "", fn }) => {
  let currentArr = eduContents;
  if (search.length)
    currentArr = eduContents.filter((e) =>
      search.toLowerCase() === ""
        ? e
        : e.title.toLocaleLowerCase().includes(search)
    );

  return currentArr.map((e) => {
    const { img, title, desc, id } = e;
    return (
      <BoxCard customClass="education-completed-cardContainer edubrowseresults">
        <div
          className="education-completed-card"
          onClick={() => redirect("/educationArticleNutrition")}
        >
          <img
            src={img}
            alt="Article Care Program"
            className="education-img image-topBottom-roundedCorners"
          />
          <div className="education-card-texts">
            <p className="text-midText education-semibold-text education-text-mid">
              {title}
            </p>
            <p className="edu-contents-desc">{desc}</p>
          </div>
        </div>
      </BoxCard>
    );
  });
};
