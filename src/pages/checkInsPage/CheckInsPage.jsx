import React, { useState } from "react";
import "./CheckInsPage.scss";
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

export const CheckInsPage = () => {
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
          <div className="checkins-bottom-possition checkins-bottom-possition-init">
            <PrimaryButton
              text="Next"
              fn={() => setInitialSection("two")}
              customClass="checkins-primary-button"
            />
          </div>
        );
        contentSet = (
          <div className="checkins-texts">
            <h1 className="text-title checkins-text-center">
              Periodic Check In
            </h1>
            <p className="text-smallText checkins-text-center">
              We want to hear about how your COPD management is going.
            </p>
          </div>
        );
        break;
      case "two":
        buttonSet = (
          <BoxCard customClass="checkins-bottom-possition">
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
          <>
            <p className="text-smallText">Periodic Check In</p>
            <p className="text-title ">How are you feeling today?</p>
            <div className="checkins-answers">
              <RoundedCard
                customClass={`checkins-roundedCard ${
                  answerSelection === 1 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(1)}
              >
                Great
              </RoundedCard>
              <RoundedCard
                customClass={`checkins-roundedCard ${
                  answerSelection === 2 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(2)}
              >
                Good
              </RoundedCard>
              <RoundedCard
                customClass={`checkins-roundedCard ${
                  answerSelection === 3 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(3)}
              >
                The same as before
              </RoundedCard>
              <RoundedCard
                customClass={`checkins-roundedCard ${
                  answerSelection === 4 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(4)}
              >
                Not well
              </RoundedCard>
              <RoundedCard
                customClass={`checkins-roundedCard ${
                  answerSelection === 5 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(5)}
              >
                Really bad
              </RoundedCard>
            </div>
          </>
        );
        break;
      case "three":
        buttonSet = (
          <BoxCard customClass="checkins-bottom-possition checkins-boxcard-progress">
            <ProgressBar numPages={5} activeState={activeStates} />
            <div className="asmt-buttons">
              <SecondaryButton
                text="Previous"
                customClass="asmt-margin-right"
                fn={() => {
                  setActiveStates([0]);
                  setInitialSection("two");
                }}
              />
              <PrimaryButton
                text="Next"
                fn={() => setInitialSection("four")}
                customClass="asmt-margin-left"
              />
            </div>
          </BoxCard>
        );
        contentSet = (
          <>
            <p className="text-smallText">Periodic Check In</p>
            <p className="text-title ">
              Have you been experiencing any shortness of breath or coughing?
            </p>
            <div className="checkins-answers">
              <RoundedCard
                customClass={`checkins-roundedCard ${
                  answerSelection === 1 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(1)}
              >
                Yes
              </RoundedCard>
              <RoundedCard
                customClass={`checkins-roundedCard ${
                  answerSelection === 2 ? "active-answer" : ""
                }`}
                fn={() => selectAnswer(2)}
              >
                No
              </RoundedCard>
            </div>
          </>
        );
        break;

      case "four":
        buttonSet = (
          <div className="checkins-bottom-possition">
            <PrimaryButton
              text="Return to Care Journey Dashboard"
              fn={() => redirect("/dashboard")}
              customClass="checkins-primary-button"
            />
          </div>
        );
        contentSet = (
          <div className="checkins-contents ">
            <div style={{ marginTop: "5rem" }}>
              <p className="text-midText">Great Job Jane!</p>
              <p className="text-midText">
                You have successfully completed your check in!
              </p>
              <IconContext.Provider
                value={{
                  className: "checkins-trophy",
                }}
              >
                <span className="checkins-trophy-container">
                  <BsFillTrophyFill />
                </span>
              </IconContext.Provider>
              <p className="text-midText">You've earned the</p>
              <p className="text-title checkins-title-center">
                Check In Completition Badge!
              </p>
              <LinkButton text="View all Awards" href="/awards" />
            </div>
          </div>
        );
        break;
      default:
        break;
    }

    return { buttonSet, contentSet };
  };

  return (
    <MobileContainer className="appImg">
      <div className="mobile-scroll-checkins">
        <Header
          toggleNotifActive={toggleNotifActive}
          toggleFavs={toggleFavs}
          toggleHeaderPanels={toggleHeaderPanels}
        />
        <section className="checkins-page">
          <div className="checkinsPage-contents">
            {serveRightCheckinContent().contentSet}
          </div>
        </section>
      </div>
      {serveRightCheckinContent().buttonSet}
    </MobileContainer>
  );
};
