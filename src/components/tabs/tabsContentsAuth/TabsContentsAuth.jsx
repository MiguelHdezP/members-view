import React from "react";
import "./TabsContentsAuth.scss";
import { authTabs } from "../../../data/mockedData";
import { InputField } from "../../../components/inputField/InputField";

const AuthEmail = () => {
  return (
    <InputField
      disabled={true}
      placeholder="jane_*****@******.com"
      customClass="auth-input-preFilled"
    />
  );
};

const AuthPhone = () => {
  return (
    <div className="auth-inputs-authPhone">
      <InputField
        disabled={true}
        placeholder="US +1"
        customClass="auth-input-country"
      />
      <InputField
        disabled={true}
        placeholder="********5432"
        customClass="auth-input-preFilled auth-email-input"
      />
    </div>
  );
};

let AuthContents = [...authTabs];

export let TabsContentsAuth = AuthContents.map((ele, i) => {
  if (ele.id === 1) ele.component = <AuthEmail />;
  if (ele.id === 2) ele.component = <AuthPhone />;
  return ele;
});
