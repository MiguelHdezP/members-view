import React, { useState } from "react";
import "./Authentication.scss";
import { RiLock2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { LoaderSection } from "../../components/loaderSection/LoaderSection";
import {
  AuthIdentify,
  AuthMethodsTypes,
  AuthPassCodes,
} from "./authSections/AuthSections";
import { AuthenticationL } from "../../layout/AuthenticationL";

export const Authentication = () => {
  const [step, setStep] = useState("one");

  const renderStepContent = () => {
    switch (step) {
      case "one":
        return <AuthIdentify fn={setStep} />;
      case "two":
        return <AuthMethodsTypes fn={setStep} />;
      case "three":
        return <AuthPassCodes fn={setStep} />;
    }
  };

  return (
    <AuthenticationL.MobileContainerC className="appImg">
      <AuthenticationL.HeaderC />
      <div className="mobile-scroll-auth">
        {step === "four" ? (
          <LoaderSection />
        ) : (
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
        )}
      </div>
    </AuthenticationL.MobileContainerC>
  );
};
