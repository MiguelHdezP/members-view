import React from "react";
import "./FirstTimeScreen.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { PrimaryButton } from "../../components/primaryButton/PrimaryButton";
import COPDFirstTimeImg from "../../assets/images/copdFirstTimeScreen.png";

export const FirstTimeScreen = () => {
  return (
    <MobileContainer className="appImg">
      <div className="mobile-scroll-firstTime">
        <Header />
        <section className="firsTime-page">
          <img
            className="firstTime-topImg"
            src={COPDFirstTimeImg}
            alt="COPD image"
          />
          <h1>COPD Care Program Overview</h1>
          <p>
            Lorem ipsum dolor sit amet, consecuter adipsicing elit, sed do sodo.
          </p>
          <BoxCard>
            <p>In this Article</p>
            <ul>
              <li>
                <a href="">What to Expect</a>
              </li>
              <li>
                <a href="">How this program can help</a>
              </li>
              <li>
                <a href="">Related resources</a>
              </li>
            </ul>
          </BoxCard>
          <h2>What to Expect</h2>
          <p> Lorem laboris nisi ut aliquip ex ea commodo consequat..</p>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat .
          </p>
          <BoxCard customClass="firstTime-boxCard">
            <PrimaryButton
              text="Continue to Care Journey Dashboard"
              customClass="fistTime-primaryBtn"
            />
          </BoxCard>
        </section>
      </div>
    </MobileContainer>
  );
};
