import React, { useState } from "react";
import "./AssessmentsPage.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { PrimaryButton } from "../../components/primaryButton/PrimaryButton";
import { SecondaryButton } from "../../components/secondaryButton/SecondaryButton";
import { LinkButton } from "../../components/linkButton/LinkButton";
import { Header } from "../../components/header/Header";
import { LoaderSection } from "../../components/loaderSection/LoaderSection";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { ProgressBar } from "../../components/progressBar/ProgressBar";
import { RoundedCard } from "../../components/roundedCard/RoundedCard";
import { BsFillTrophyFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { redirect } from "../../utils/scripts";

export const AssessmentsPage = () => {
  const [initialSection, setInitialSection] = useState("one");
  const [answerSelection, setAnswerSelection] = useState(0);
  const [activeStates, setActiveStates] = useState([0]);
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

  const selectAnswer = (num) => {
    setAnswerSelection(num);
  };

  const serveRightCheckinContent = () => {
    let buttonSet;
    let contentSet;

    switch (initialSection) {
      case "one":
        buttonSet = (
          <div className="asmt-bottom-possition asmt-bottom-possition-init">
            <PrimaryButton
              text="Next"
              fn={() => setInitialSection("two")}
              customClass="asmt-primary-button"
            />
          </div>
        );
        contentSet = (
          <div className="asmt-texts">
            <h1 className="text-title asmt-title-text">
              Assessment Start Screen
            </h1>
            <p className="text-smallText asmt-small-text-firstScreen">
              Description of what this is and why its needed..
            </p>
          </div>
        );
        break;
      case "two":
        buttonSet = (
          <BoxCard customClass="asmt-bottom-possition">
            <ProgressBar numPages={5} activeState={activeStates} />
            <PrimaryButton
              text="Next"
              fn={() => {
                setActiveStates([0, 1]);
                setInitialSection("three");
              }}
            />
          </BoxCard>
        );
        contentSet = (
          <div className="asmt-contents">
            <p className="text-smallText asmt-small-text">Assessment</p>
            <p className="text-title">
              Have you noticed any symptoms that may be related to your COPD,
              such as shortness of breath or coughing?
            </p>
            <div className="asmt-answers">
              <RoundedCard
                customClass={`asmt-roundedCard ${
                  answerSelection === 1 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(1)}
              >
                I was diagnosed with COPD after experiencing persistent
                shortness of breath and coughing.
              </RoundedCard>
              <RoundedCard
                customClass={`asmt-roundedCard ${
                  answerSelection === 2 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(2)}
              >
                I was diagnosed with COPD after experiencing a flare-up of my
                symptoms and seeking medical attention.
              </RoundedCard>
              <RoundedCard
                customClass={`asmt-roundedCard ${
                  answerSelection === 3 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(3)}
              >
                I was diagnosed with COPD after my healthcare provider noticed
                that I had a history of smoking.
              </RoundedCard>
              <RoundedCard
                customClass={`asmt-roundedCard ${
                  answerSelection === 4 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(4)}
              >
                I was diagnosed with COPD after my healthcare provider noticed
                that I had a history of working in a job that exposed me to
                respiratory irritants.
              </RoundedCard>
            </div>
            <div className="bottom-spacer"></div>
          </div>
        );
        break;
      case "three":
        buttonSet = (
          <div className="asmt-bottom-possition asmt-bottom-possition-init">
            <PrimaryButton
              text="Return to Care Journey Dashboard"
              fn={() => redirect("/dashboard")}
              customClass="asmt-primary-button"
            />
          </div>
        );
        contentSet = (
          <div className="asmt-contents">
            <div style={{ marginTop: "5rem" }}>
              <p className="text-midText">Great Job Jane!</p>
              <p className="text-midText">
                You have successfully completed your assessment!
              </p>
              <IconContext.Provider
                value={{
                  className: "asmt-trophy",
                }}
              >
                <span className="asmt-trophy-container">
                  <BsFillTrophyFill />
                </span>
              </IconContext.Provider>
              <p className="text-midText">You've earned the</p>
              <p className="text-title asmt-title-center">
                Assessment Completition Badge!
              </p>
              <LinkButton text="View all Awards" href="/awards" />
            </div>
          </div>
        );
        break;

      case "four":
        break;
      default:
        break;
    }

    return { buttonSet, contentSet };
  };

  return (
    <MobileContainer className="appImg">
      <div className="mobile-scroll-asmt">
        <Header
          toggleNotifActive={toggleNotifActive}
          toggleFavs={toggleFavs}
          toggleHeaderPanels={toggleHeaderPanels}
        />
        <section className="asmt-page">
          <div className="asmt-page-contents">
            {serveRightCheckinContent().contentSet}
          </div>
        </section>
      </div>
      {serveRightCheckinContent().buttonSet}
    </MobileContainer>
  );
};
