// @ts-nocheck
import React, { useState } from "react";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { ProgressPercentage } from "../../components/progressPercentage/ProgressPercentage";
import { IconContext } from "react-icons";
import { BsPlayCircle } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  articleImg,
  articleImg2,
  copdImg,
  dietImg,
  videoImg,
} from "../../data/images";
import { RoundedCard } from "../../components/roundedCard/RoundedCard";
import { redirect, addFavorites } from "../../utils/scripts";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let eduActis = "";
let learnMoreDesc = "";
let copdTitle = "";
let whatsCOPD = "";
let copdWatch = "";
let hyperTitle = "";
let hyperSigns = "";
let hyperWatch = "";
let article3 = "";
let article4 = "";
let video5 = "";
let article6 = "";
let progressWeek = "";

if (currentLang === "en") {
  eduActis = "Your Educational Activities";
  learnMoreDesc =
    "Learn more about your conditions by viewing content selected for you by your care manager.";
  copdTitle = "COPD";
  whatsCOPD = "What is COPD?";
  copdWatch = "3 min watch";
  hyperTitle = "Hypertension";
  hyperSigns = "Signs and Symptoms of Hypertension";
  hyperWatch = "5 min watch";
  article3 = "Article Title 3";
  article4 = "Article Title 4";
  video5 = "Video Title 5";
  article6 = "Article Title 6";
  progressWeek = "Your Progress this Week";
} else if (currentLang === "es") {
  eduActis = "Tus Actividades Educativas";
  learnMoreDesc = "Obtenga más información sobre sus condiciones.";
  copdTitle = "EPOC";
  whatsCOPD = "¿Qué es EPOC?";
  copdWatch = "Duración 3 min";
  hyperTitle = "Hipertensión";
  hyperSigns = "Signos y síntomas de la hipertensión";
  hyperWatch = "Duración 5 min";
  article3 = "Título de Artículo 3";
  article4 = "Título de Artículo 4";
  video5 = "Título del Vídeo 5";
  article6 = "Título de Artículo 6";
  progressWeek = "Tu progreso esta semana";
}

export const EducationUnique = ({ handleOpen }) => {
  const [uglyRender, setUglyRender] = useState(false);
  const favsArr = JSON.parse(sessionStorage.getItem("currentFavs")) ?? [];

  return (
    <section className="education-page">
      <div className="education-general-info">
        <BoxCard customClass="education-boxcard">
          <ProgressPercentage progressLabel={progressWeek} value={15} />
        </BoxCard>
        <h2 className="text-title education-text-title">{eduActis}</h2>
        <p className="text-smallText education-text-mid">{learnMoreDesc}</p>
      </div>
      <div className="education-todo">
        <h2 className="text-midText education-text-mid">{copdTitle}</h2>
        <RoundedCard customClass="education-rounded-card">
          <IconContext.Provider
            value={{
              className: "button-card-star-inprogress",
            }}
          >
            <div className="education-todo-buttons">
              <button className="education-play-button" onClick={handleOpen}>
                <BsPlayCircle />
              </button>
              <button
                title="Add to favorites"
                className="button-card-favs"
                onClick={() => addFavorites(1, setUglyRender, uglyRender)}
              >
                {favsArr.some((e) => e == 1) ? (
                  <AiFillStar />
                ) : (
                  <AiOutlineStar />
                )}
              </button>
            </div>
          </IconContext.Provider>
          <img
            src={copdImg}
            alt="What is COPD?"
            className="image-top-roundedCorners img-tint-dark"
          />
          <div className="education-todo-texts">
            <p className="text-midText education-semibold-text education-text-mid">
              {whatsCOPD}
            </p>
            <p className="text-midText education-text-mid">
              Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.
            </p>
            <p className="text-smallText education-purple-text education-text-mid">
              {copdWatch}
            </p>
          </div>
        </RoundedCard>
        <h2 className="text-midText education-text-mid">{hyperTitle}</h2>
        <RoundedCard customClass="education-rounded-card">
          <IconContext.Provider
            value={{
              className: "button-card-star-inprogress",
            }}
          >
            <button
              title="Add to favorites"
              className="button-card-favs"
              onClick={() => addFavorites(2, setUglyRender, uglyRender)}
            >
              {favsArr.some((e) => e == 2) ? <AiFillStar /> : <AiOutlineStar />}
            </button>
          </IconContext.Provider>
          <img
            src={dietImg}
            alt="Signs and Symptoms of Hypertension"
            className="image-top-roundedCorners img-tint-dark"
          />
          <div className="education-todo-texts">
            <p className="text-midText education-semibold-text education-text-mid">
              {hyperSigns}
            </p>
            <p className="text-midText education-text-mid">
              Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.
            </p>
            <p className="text-smallText education-purple-text education-text-mid">
              {hyperWatch}
            </p>
          </div>
        </RoundedCard>
      </div>
      <div className="education-completed">
        <div className="education-completed-header">
          <h2 className="text-midText education-text-mid education-mid-topMargin">
            {copdTitle}
          </h2>
        </div>
        <BoxCard customClass="education-completed-cardContainer">
          <IconContext.Provider
            value={{
              className: "button-card-star",
            }}
          >
            <button
              title="Add to favorites"
              className="button-card-favs"
              onClick={() => addFavorites(3, setUglyRender, uglyRender)}
            >
              {favsArr.some((e) => e == 3) ? <AiFillStar /> : <AiOutlineStar />}
            </button>
          </IconContext.Provider>
          <div
            className="education-completed-card"
            onClick={() => redirect("/educationArticle")}
          >
            <img
              src={articleImg}
              alt="Article Care Program"
              className="education-img image-topBottom-roundedCorners"
            />
            <div className="education-card-texts">
              <p className="text-midText education-semibold-text education-text-mid">
                {article3}
              </p>
              <p className="text-smallText education-text-mid">
                Lorem Ipsum Desc
              </p>
            </div>
          </div>
        </BoxCard>
        <BoxCard customClass="education-completed-cardContainer">
          <IconContext.Provider
            value={{
              className: "button-card-star",
            }}
          >
            <button
              title="Add to favorites"
              className="button-card-favs"
              onClick={() => addFavorites(4, setUglyRender, uglyRender)}
            >
              {favsArr.some((e) => e == 4) ? <AiFillStar /> : <AiOutlineStar />}
            </button>
          </IconContext.Provider>
          <div
            className="education-completed-card"
            onClick={() => redirect("/educationArticle")}
          >
            <img
              src={articleImg2}
              alt="Article Care Program"
              className="education-img image-topBottom-roundedCorners"
            />
            <div className="education-card-texts">
              <p className="text-midText education-semibold-text education-text-mid">
                {article4}
              </p>
              <p className="text-smallText education-text-mid">
                Lorem Ipsum Desc
              </p>
            </div>
          </div>
        </BoxCard>
      </div>
      <div className="education-completed">
        <div className="education-completed-header">
          <h2 className="text-midText education-text-mid education-mid-topMargin">
            {hyperTitle}
          </h2>
        </div>
        <BoxCard customClass="education-completed-cardContainer">
          <IconContext.Provider
            value={{
              className: "button-card-star",
            }}
          >
            <button
              title="Add to favorites"
              className="button-card-favs"
              onClick={() => addFavorites(5, setUglyRender, uglyRender)}
            >
              {favsArr.some((e) => e == 5) ? <AiFillStar /> : <AiOutlineStar />}
            </button>
          </IconContext.Provider>
          <div
            className="education-completed-card"
            onClick={() => redirect("/educationArticle")}
          >
            <img
              src={videoImg}
              alt="Article Care Program"
              className="education-img image-topBottom-roundedCorners"
            />
            <div className="education-card-texts">
              <p className="text-midText education-semibold-text education-text-mid">
                {video5}
              </p>
              <p className="text-smallText education-text-mid">
                Lorem Ipsum Desc
              </p>
            </div>
          </div>
        </BoxCard>
        <BoxCard customClass="education-completed-cardContainer">
          <IconContext.Provider
            value={{
              className: "button-card-star",
            }}
          >
            <button
              title="Add to favorites"
              className="button-card-favs"
              onClick={() => addFavorites(6, setUglyRender, uglyRender)}
            >
              {favsArr.some((e) => e == 6) ? <AiFillStar /> : <AiOutlineStar />}
            </button>
          </IconContext.Provider>
          <div
            className="education-completed-card"
            onClick={() => redirect("/educationArticle")}
          >
            <img
              src={articleImg2}
              alt="Article Care Program"
              className="education-img image-topBottom-roundedCorners"
            />
            <div className="education-card-texts">
              <p className="text-midText education-semibold-text education-text-mid">
                {article6}
              </p>
              <p className="text-smallText education-text-mid">
                Lorem Ipsum Desc
              </p>
            </div>
          </div>
        </BoxCard>
        <div className="bottom-spacer"></div>
      </div>
    </section>
  );
};
