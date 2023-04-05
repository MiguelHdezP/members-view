import React from "react";
import "./AuthIdentityForm.scss";
import { Tabs } from "../tabs/Tabs";
import { TabsContents } from "./tabsContents/TabsContents";
import { InputField } from "../inputField/InputField";
import { LinkButton } from "../linkButton/LinkButton";

export const AuthIdentification = () => {
  return (
    <div className="auth-id">
      <InputField type="text" placeholder="First Name" />
      <InputField type="text" placeholder="Last Name" />
      <InputField type="date" placeholder="MM/DD/YYYY" maxLength={6} />
    </div>
  );
};

export const AuthMethods = () => {
  return (
    <div className="auth-methods">
      <Tabs tabsContents={TabsContents} />
    </div>
  );
};

export const AuthPassCode = () => {
  return (
    <>
      <div className="auth-passcode">
        <InputField customClass="passcode-inputs" />
        <InputField customClass="passcode-inputs" />
        <InputField customClass="passcode-inputs" />
        <InputField customClass="passcode-inputs" />
        <InputField customClass="passcode-inputs" />
        <InputField customClass="passcode-inputs" />
      </div>
      <LinkButton text="Resend Code" customClass="passcode-resend" />
    </>
  );
};
