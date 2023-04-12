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

  const selectAnswer = (num) => {
    setAnswerSelection(num);
  };

  const serveRightCheckinContent = () => {
    let buttonSet;
    let contentSet;

    switch (initialSection) {
      case "one":
        buttonSet = (
          <div className="asmt-bottom-possition pollo">
            <PrimaryButton text="Next" fn={() => setInitialSection("two")} />
          </div>
        );
        contentSet = (
          <div className="assessment-texts">
            <h1 className="text-title ">Assessment Start Screen</h1>
            <p className="text-smallText">
              Description of what this is and why its needed..
            </p>
          </div>
        );
        break;
      case "two":
        buttonSet = (
          <BoxCard customClass="asmt-bottom-possition jote">
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
            <p className="text-smallText">Assessment</p>
            <p className="text-title ">
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
          </>
        );
        break;
      case "three":
        buttonSet = (
          <div className="asmt-bottom-possition">
            <PrimaryButton
              text="Return to Care Journey Dashboard"
              fn={() => redirect("/dashboard")}
            />
          </div>
        );
        contentSet = (
          <>
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
            <p className="text-title ">Assessment Completition Badge!</p>
            <LinkButton text="View all Awards" href="/awards" />
          </>
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
      <div className="mobile-scroll-checkins">
        <Header />
        <section className="asmt-page">
          <div className="checkinsPage-contents">
            {serveRightCheckinContent().contentSet}
          </div>
          {serveRightCheckinContent().buttonSet}
        </section>
      </div>
    </MobileContainer>
  );
};
