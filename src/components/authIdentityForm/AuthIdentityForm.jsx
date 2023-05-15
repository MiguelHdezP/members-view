import React, { forwardRef } from "react";
import "./AuthIdentityForm.scss";
import { Tabs } from "../tabs/Tabs";
import { TabsContentsAuth } from "../tabs/tabsContentsAuth/TabsContentsAuth";
import { InputField } from "../inputField/InputField";
import { LinkButton } from "../linkButton/LinkButton";

export const AuthIdentification = () => {
  let inputs = [1, 2, 3];
  return (
    <div className="auth-id">
      {inputs.map((e, i) => (
        <InputField
          type="text"
          placeholder="First Name"
          fakeType="text"
          id={`${i + 1}`}
          key={i}
        />
      ))}
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

export const AuthPassCode = forwardRef((props, ref) => {
  const { error, fn } = props;
  let inputs = [1, 2, 3, 4, 5, 6];

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fn();
    }
  };

  return (
    <>
      <div className="auth-passcode" ref={ref} onKeyUp={handleEnter}>
        {inputs.map((e, i) => (
          <InputField
            customClass="passcode-inputs"
            type="tel"
            maxLength={1}
            id={`${i + 1}`}
            key={i}
            error={error}
          />
        ))}
      </div>
      <LinkButton text="Resend Code" customClass="passcode-resend" />
    </>
  );
});
