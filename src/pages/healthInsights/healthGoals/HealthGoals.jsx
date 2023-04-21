import React, { useRef, useState } from "react";
import "../HealthInsights.scss";
import { MobileContainer } from "../../../components/mobileContainer/MobileContainer";
import { Header } from "../../../components/header/Header";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { Tabs } from "../../../components/tabs/Tabs";
import { TabsContentsGoals } from "../../../components/tabs/tabsCotentsGoals/TabsContentsGoals";
import { SecondaryButton } from "../../../components/secondaryButton/SecondaryButton";
import { PrimaryButton } from "../../../components/primaryButton/PrimaryButton";
import { SectionHeader } from "../../../components/sectionHeader/SectionHeader";

export const HealthGoals = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);
  const [manageGoals, setManageGoals] = useState(false);
  const [hideGoal, setHideGoal] = useState(true);
  const [toggleManageBtn, setToggleManageBtn] = useState(false);
  const [textareaVal, setTextAreaVal] = useState({});
  const [addNewGoal, setAddNewGoal] = useState(false);
  const [saveNewGoal, setSaveNewGoal] = useState(false);
  const [newGoalText, setNewGoalText] = useState("");
  const inputRef = useRef(null);

  let texareaFallBack = "";

  let getCompleted = localStorage.getItem("completedTabs");
  if (getCompleted !== null) {
    texareaFallBack = JSON.parse(getCompleted);
  }

  const toggleHeaderPanels = (action) => {
    if (action === "notifi") {
      if (toggleFavs) setToggleFavs(!toggleFavs);
      setToggleNotifActive(!toggleNotifActive);
    } else if (action === "favs") {
      if (toggleNotifActive) setToggleNotifActive(!toggleNotifActive);
      setToggleFavs(!toggleFavs);
    }
  };

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

    return Component(
      manageGoals,
      textValues,
      setTextAreaVal,
      hideGoal,
      saveNewGoal
    );
  };

  const saveGoals = () => {
    setManageGoals(false);
    setHideGoal(false);
    setToggleManageBtn(!toggleManageBtn);
  };

  let componentProv = (
    <Tabs tabsContents={TabsContentsGoalsDecorator(TabsContentsGoals)} />
  );

  //toggleManageBtn ? "health-goals-deactivate" : ""

  return (
    <MobileContainer className="appImg">
      <Header
        toggleNotifActive={toggleNotifActive}
        toggleFavs={toggleFavs}
        toggleHeaderPanels={toggleHeaderPanels}
      />
      <div className="mobile-scroll-health">
        <section className="health-page">
          <div className="healthIn-container">
            {addNewGoal ? (
              <>
                <SectionHeader
                  customClass="healthIn-btn-close"
                  fn={() => closeAddGoal(false)}
                />
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
                  <p className="text-title  healthIn-title-bottom">Goals</p>
                  <p className="text-midText reset margin text-left">
                    Manage your health by tracking care plan goals and creating
                    your own goals.
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
          <PrimaryButton
            text="Save"
            customClass="healthIn-goals-btn healthIn-goals-btn-save"
            fn={() => saveGoals()}
          />
        ) : addNewGoal ? (
          <PrimaryButton
            text="Save"
            customClass="healthIn-goals-btn healthIn-goals-btn-save"
            fn={() => saveAddedGoal(false)}
          />
        ) : (
          <>
            <SecondaryButton
              text="Add New"
              customClass="healthIn-goals-btn"
              icon={true}
              fn={() => toggleAddGoal(true)}
            />
            <PrimaryButton
              text="Manage Goals"
              customClass={`healthIn-goals-btn`}
              fn={() => setManageGoals(true)}
              disabled={toggleManageBtn}
            />
          </>
        )}
      </div>
    </MobileContainer>
  );
};
