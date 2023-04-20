import React from "react";
import "./AuthIdentityForm.scss";
import { Tabs } from "../tabs/Tabs";
import { TabsContentsAuth } from "./tabsContents/tabsContentsAuth/TabsContentsAuth";
import { InputField } from "../inputField/InputField";
import { LinkButton } from "../linkButton/LinkButton";

export const AuthIdentification = () => {
  return (
    <div className="auth-id">
      <InputField type="text" placeholder="First Name" fakeType="text" />
      <InputField type="text" placeholder="Last Name" fakeType="text" />
      <InputField type="tex" placeholder="MM/DD/YYYY" fakeType="date" />
    </div>
  );
};

export const AuthMethods = () => {
  return (
    <div className="auth-methods">
      <Tabs tabsContents={TabsContentsAuth} />
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
