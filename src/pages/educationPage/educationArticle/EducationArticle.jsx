import React from "react";
import "./EducationArticle.scss";
import { MobileContainer } from "../../../components/mobileContainer/MobileContainer";
import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { BoxCard } from "../../../components/boxCard/BoxCard";
import { eduArticle } from "../../../data/images";

export const EducationArticle = () => {
  return (
    <MobileContainer className="appImg">
      <div className="mobile-scroll-eduArticle">
        <Header />
        <section className="eduArticle-page">
          <div className="firstTime-page-contents">
            <Breadcrumb text="back" href="/education" />
            <img className="firstTime-topImg" src={eduArticle} alt="COPD" />
            <h1 className="firstTime-title">COPD imag</h1>
            <p className="firstTime-subText">
              Lorem ipsum dolor sit amet, consecuter adipsicing elit, sed do
              sodo.
            </p>
            <BoxCard customClass="firstTime-article-boxCard">
              <p className="firstTime-article-title">In this Article</p>
              <ul className="firstTime-article-list">
                <li className="firstTime-list">
                  <a
                    href="/articles/copd-foods"
                    className="firstTime-list-anchor"
                  >
                    COPD friendly foods
                  </a>
                </li>
                <li className="firstTime-list">
                  <a
                    href="/articles/what-to-avoid"
                    className="firstTime-list-anchor"
                  >
                    What to avoid
                  </a>
                </li>
              </ul>
            </BoxCard>
            <h2 className="firstTime-subTitle">COPD Friendly Foods</h2>
            <p className="firstTime-subText">
              Lorem laboris nisi ut aliquip ex ea commodo consequat..
            </p>
            <p className="firstTime-subText">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat .
            </p>
            <div className="bottom-spacer"></div>
          </div>
        </section>
        <Footer />
      </div>
    </MobileContainer>
  );
};
