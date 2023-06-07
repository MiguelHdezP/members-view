import React, { useState } from "react";
import "./EduCategosResults.scss";
import { BoxCard } from "../../../components/boxCard/BoxCard";
import {
  BrowseImg1,
  BrowseImg2,
  BrowseImg3,
  BrowseImg4,
  BrowseImg5,
} from "../../../data/images";
import { redirect } from "../../../utils/scripts";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let eduActis = "";

if (currentLang === "en") {
  eduActis = "Browse Content";
} else if (currentLang === "es") {
  eduActis = "Explorar Contenido";
}

const eduContents = [
  {
    id: 1,
    img: BrowseImg1,
    title: "Nutrition",
    desc: "Online description",
  },
  {
    id: 2,
    img: BrowseImg2,
    title: "Why Water is Important",
    desc: "Online description",
  },
  {
    id: 3,
    img: BrowseImg3,
    title: "Nutrition and Exercise",
    desc: "Online description",
  },
  {
    id: 4,
    img: BrowseImg4,
    title: "Planning a Balanced Diet",
    desc: "Online description",
  },
  {
    id: 5,
    img: BrowseImg5,
    title: "Nutrition Support",
    desc: "Online description",
  },
];

export const EduCategosResults = ({ search = "", fn }) => {
  const [toggleFav, setToggleFav] = useState(false);
  let currentArr = eduContents;
  if (search.length)
    currentArr = eduContents.filter((e) =>
      search.toLowerCase() === ""
        ? e
        : e.title.toLocaleLowerCase().includes(search)
    );

  const handleFav = () => {
    setToggleFav(!toggleFav);
  };

  return currentArr.map((e) => {
    const { img, title, desc, id } = e;
    return (
      <BoxCard customClass="education-completed-cardContainer edubrowseresults edu-contents-container">
        <button
          title="Add to favorites"
          className="button-card-favs edu-categos-fav"
          onClick={handleFav}
        >
          {toggleFav ? <AiFillStar /> : <AiOutlineStar />}
        </button>
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
