import React, { useEffect, useState } from "react";
import "./Authentication.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { InstructionsText } from "../../components/instructions/InstructionsText";
import { authInstructions } from "../../data/mockedData";
import {
  AuthIdentification,
  AuthMethods,
  AuthPassCode,
} from "../../components/authIdentityForm/AuthIdentityForm";
import { PrimaryButton } from "../../components/primaryButton/PrimaryButton";
import { SecondaryButton } from "../../components/secondaryButton/SecondaryButton";
import { LinkButton } from "../../components/linkButton/LinkButton";
import { RiLock2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FirstTimeScreen } from "../firstTimeScreen/FirstTimeScreen";

export const Authentication = () => {
  const [step, setStep] = useState("one");

  useEffect(() => {}, [step]);

  const buttonAction = (next) => {
    setStep(next);
  };
  const renderStepContent = () => {
    let authContents;
    switch (step) {
      case "one":
        authContents = (
          <>
            <InstructionsText text={authInstructions[0].text} />
            <div className="auth-container">
              <AuthIdentification />
              <div className="auth-container-btns">
                <PrimaryButton text="Next" fn={() => buttonAction("two")} />
                <LinkButton text="Help" />
              </div>
            </div>
          </>
        );
        break;
      case "two":
        authContents = (
          <>
            <InstructionsText text={authInstructions[1].text} />
            <div className="auth-container">
              <AuthMethods />
              <div className="auth-container-btns">
                <PrimaryButton
                  text="Send Code"
                  fn={() => buttonAction("three")}
                />
                <LinkButton text="Help" />
              </div>
            </div>
          </>
        );
        break;
      case "three":
        authContents = (
          <>
            <InstructionsText text={authInstructions[2].text} />
            <div className="auth-container">
              <AuthPassCode />
              <div className="auth-container-btns">
                <PrimaryButton
                  text="Valid Code"
                  fn={() => buttonAction("four")}
                />
                <SecondaryButton text="Cancel" fn={() => buttonAction("one")} />
              </div>
            </div>
          </>
        );
      case "four":
        window.location.href = "/memberview/programOverview";
        break;
      default:
        break;
    }
    return <>{authContents}</>;
  };

  return (
    <MobileContainer className="appImg">
      <div className="mobile-scroll">
        <section className="authentication-page">
          <IconContext.Provider
            value={{
              className: "auth-lock",
            }}
          >
            <div className="auth-lock-icon">
              <RiLock2Fill />
            </div>
          </IconContext.Provider>
          <h1 className="auth-h1">Confirm your identity</h1>
          {renderStepContent()}
        </section>
      </div>
    </MobileContainer>
  );
};
