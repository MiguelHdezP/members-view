import React, { useRef, useState } from "react";
import "../HealthInsights.scss";
import { MobileContainer } from "../../../components/mobileContainer/MobileContainer";
import { Header } from "../../../components/header/Header";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { Tabs } from "../../../components/tabs/Tabs";
import { TabsContentsCareVisits } from "../../../components/tabs/tabsContentsCareVisits/TabsContentsCareVisits";
import { SecondaryButton } from "../../../components/secondaryButton/SecondaryButton";
import { PrimaryButton } from "../../../components/primaryButton/PrimaryButton";

export const CareVisits = () => {
  const [manageGoals, setManageGoals] = useState(false);
  const [hideGoal, setHideGoal] = useState(true);
  const [toggleManageBtn, setToggleManageBtn] = useState(false);
  const [textareaVal, setTextAreaVal] = useState({});
  const [addNewGoal, setAddNewGoal] = useState(false);
  const [saveNewGoal, setSaveNewGoal] = useState(false);
  const inputRef = useRef(null);

  let texareaFallBack = "";

  let getCompleted = localStorage.getItem("completedTabs");
  if (getCompleted !== null) {
    texareaFallBack = JSON.parse(getCompleted);
  }

  const toggleAddGoal = (val) => {
    setAddNewGoal(val);
    setToggleManageBtn(false);
  };

  const closeAddGoal = (val) => {
    setAddNewGoal(val);
  };

  const saveAddedGoal = (val) => {
    localStorage.setItem("newGoal", inputRef.current.value);
    setSaveNewGoal(true);
    setAddNewGoal(val);
    setToggleManageBtn(false);
  };

  const TabsContentsGoalsDecorator = (Component) => {
    let textValues =
      texareaFallBack.length !== 0 ? texareaFallBack : textareaVal;
    console.log("Values: ", textareaVal);
    return Component(
      manageGoals,
      textValues,
      setTextAreaVal,
      hideGoal,
      saveNewGoal
    );
  };

  const saveGoals = () => {
    setManageGoals(true);
    setHideGoal(false);
    setToggleManageBtn(!toggleManageBtn);
  };

  let componentProv = (
    <Tabs tabsContents={TabsContentsGoalsDecorator(TabsContentsCareVisits)} />
  );

  return (
    <MobileContainer className="appImg">
      <Header />
      <div className="mobile-scroll-health">
        <section className="health-page">
          <div className="healthIn-container">
            {addNewGoal ? (
              <>
                <p className="text-title startS-title-text">Add New Goal</p>
                <p className="text-smallText">
                  Add a personal health goal you would like to track.
                </p>
                <div className="healthIn-addGoal-input">
                  <input
                    type="text"
                    className="healthIn-addGoal-inputIndividual"
                    placeholder="Enter a personal goal here"
                    ref={inputRef}
                  />
                </div>
              </>
            ) : (
              <>
                <Breadcrumb text="Health Insights" href="/healthInsights" />
                <div className="healthIn-titles">
                  <p className="text-title  healthIn-title-bottom">
                    Care Visits
                  </p>
                  <p className="text-midText reset margin text-left">
                    See care you may have missed and manage what care you’ve
                    recieved
                  </p>
                </div>
                <div className="healthIn-tabs">{componentProv}</div>
              </>
            )}
          </div>
        </section>
      </div>
      <div className="health-buttons-container" id="js-goals-buttons">
        {manageGoals ? (
          <>
            <SecondaryButton
              text="Cancel"
              customClass="healthIn-goals-btn"
              fn={() => setManageGoals(false)}
            />
            <PrimaryButton
              text="Save"
              customClass="healthIn-goals-btn"
              fn={() => saveGoals()}
            />
          </>
        ) : (
          <PrimaryButton
            text="Manage Care Visits"
            customClass={`healthIn-carevisits-btn`}
            fn={() => setManageGoals(true)}
            disabled={toggleManageBtn}
          />
        )}
      </div>
    </MobileContainer>
  );
};
