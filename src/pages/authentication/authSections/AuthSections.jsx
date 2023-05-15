import React, { useRef, useState } from "react";
import { InstructionsText } from "../../../components/instructions/InstructionsText";
import {
  AuthIdentification,
  AuthMethods,
  AuthPassCode,
} from "../../../components/authIdentityForm/AuthIdentityForm";
import { PrimaryButton } from "../../../components/primaryButton/PrimaryButton";
import { LinkButton } from "../../../components/linkButton/LinkButton";
import { authInstructions } from "../../../data/mockedData";
import { SecondaryButton } from "../../../components/secondaryButton/SecondaryButton";
import { redirect } from "../../../utils/scripts";

export const AuthIdentify = ({ fn }) => {
  return (
    <>
      <InstructionsText text={authInstructions[0].text} />
      <div className="auth-container">
        <AuthIdentification />
        <div className="auth-container-btns">
          <PrimaryButton text="Next" fn={() => fn("two")} />
          <LinkButton text="Help" />
        </div>
      </div>
    </>
  );
};

export const AuthMethodsTypes = ({ fn }) => {
  return (
    <>
      <InstructionsText text={authInstructions[1].text} />
      <div className="auth-container">
        <AuthMethods />
        <div className="auth-container-btns auth-methods-btns">
          <PrimaryButton text="Send Code" fn={() => fn("three")} />
          <LinkButton text="Help" />
        </div>
      </div>
    </>
  );
};

export const AuthPassCodes = ({ fn }) => {
  const authCodeRef = useRef(null);
  const [inputError, setInputError] = useState(false);

  const buttonAction = () => {
    if (authCodeRef === null) return null;
    const getAuthInputs = authCodeRef.current.childNodes;
    let authCode = "";
    for (let i = 0; i < getAuthInputs.length; i++) {
      authCode += getAuthInputs[i].value;
    }
    if (!authCode.length) {
      setInputError(true);
    } else {
      fn("four");
      if (authCode === "123456") {
        redirect("/memberview/programOverview?q=single", 2000);
      } else if (authCode === "654321") {
        redirect("/memberview/programOverview?q=multi", 2000);
      }
    }
  };

  return (
    <>
      <InstructionsText text={authInstructions[2].text} />
      <div className="auth-container">
        <AuthPassCode ref={authCodeRef} fn={buttonAction} error={inputError} />
        <div className="auth-container-btns auth-methods-btns ">
          <PrimaryButton text="Valid Code" fn={buttonAction} />
          <SecondaryButton text="Cancel" fn={() => fn("one")} />
        </div>
      </div>
    </>
  );
};
