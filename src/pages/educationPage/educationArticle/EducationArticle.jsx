import React, { useState } from "react";
import "./EducationArticle.scss";
import { MobileContainer } from "../../../components/mobileContainer/MobileContainer";
import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { BoxCard } from "../../../components/boxCard/BoxCard";
import { eduArticle } from "../../../data/images";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let articleTitle = "";
let inThis = "";
let backBread = "";
let friendly = "";
let whatAvoid = "";
let hyperTitle = "";
let hyperSigns = "";
let hyperWatch = "";
let article3 = "";
let article4 = "";
let video5 = "";
let article6 = "";
let progressWeek = "";

if (currentLang === "en") {
  articleTitle = "Article title";
  inThis = "In this Article.";
  backBread = "Back";
  friendly = "Friendly foods";
  whatAvoid = "What to Avoid";
  hyperTitle = "Hypertension";
  hyperSigns = "Signs and Symptoms of Hypertension";
  hyperWatch = "5 min watch";
  article3 = "Article Title 3";
  article4 = "Article Title 4";
  video5 = "Video Title 5";
  article6 = "Article Title 6";
  progressWeek = "Your Progress this Week";
} else if (currentLang === "es") {
  articleTitle = "Título del Artículo";
  inThis = "En éste artículo.";
  backBread = "Regresar";
  friendly = "Alimentos Saludables";
  whatAvoid = "Qué evitar";
  hyperTitle = "Hipertensión";
  hyperSigns = "Signos y síntomas de la hipertensión";
  hyperWatch = "Duración 5 min";
  article3 = "Título de Artículo 3";
  article4 = "Título de Artículo 4";
  video5 = "Título del Vídeo 5";
  article6 = "Título de Artículo 6";
  progressWeek = "Tu progreso esta semana";
}

export const EducationArticle = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);

  const toggleHeaderPanels = (action) => {
    if (action === "notifi") {
      if (toggleFavs) setToggleFavs(!toggleFavs);
      setToggleNotifActive(!toggleNotifActive);
    } else if (action === "favs") {
      if (toggleNotifActive) setToggleNotifActive(!toggleNotifActive);
      setToggleFavs(!toggleFavs);
    }
  };
  return (
    <MobileContainer className="appImg">
      <Header
        toggleNotifActive={toggleNotifActive}
        toggleFavs={toggleFavs}
        toggleHeaderPanels={toggleHeaderPanels}
      />
      <div className="mobile-scroll-eduArticle">
        <section className="eduArticle-page">
          <div className="firstTime-page-contents">
            <Breadcrumb text={backBread} href="/education" fn={() => {}} />
            <img
              className="firstTime-topImg"
              src={eduArticle}
              alt="Care Program"
            />
            <h1 className="firstTime-title">{articleTitle}</h1>
            <p className="firstTime-subText">
              Lorem ipsum dolor sit amet, consecuter adipsicing elit, sed do
              sodo.
            </p>
            <BoxCard customClass="firstTime-article-boxCard">
              <p className="firstTime-article-title">{inThis}</p>
              <ul className="firstTime-article-list">
                <li className="firstTime-list">
                  <a
                    href="/articles/copd-foods"
                    className="firstTime-list-anchor"
                  >
                    {friendly}
                  </a>
                </li>
                <li className="firstTime-list">
                  <a
                    href="/articles/what-to-avoid"
                    className="firstTime-list-anchor"
                  >
                    {whatAvoid}
                  </a>
                </li>
              </ul>
            </BoxCard>
            <h2 className="firstTime-subTitle"> {friendly}</h2>
            <p className="firstTime-subText">
              Lorem laboris nisi ut aliquip ex ea commodo consequat..
            </p>
            <p className="firstTime-subText">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat .
            </p>

            <p className="firstTime-subText">
              Lorem laboris nisi ut aliquip ex ea commodo consequat..
            </p>
            <div style={{ marginBottom: "3rem" }}></div>
            <h2 className="firstTime-subTitle"> {whatAvoid}</h2>
            <p className="firstTime-subText">
              Lorem laboris nisi ut aliquip ex ea commodo consequat..
            </p>
            <p className="firstTime-subText">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat .
            </p>

            <p className="firstTime-subText">
              Lorem laboris nisi ut aliquip ex ea commodo consequat..
            </p>
            <div className="bottom-spacer"></div>
          </div>
        </section>
      </div>
      <Footer customClass="footer-moreOptions-bottomFix" />
    </MobileContainer>
  );
};
