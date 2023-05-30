import React, { useRef, useState } from "react";
import "../HealthInsights.scss";
import { MobileContainer } from "../../../components/mobileContainer/MobileContainer";
import { Header } from "../../../components/header/Header";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { Tabs } from "../../../components/tabs/Tabs";
import { TabsContentsGoals } from "../../../components/tabs/tabsCotentsGoals/TabsContentsGoals";
import { SecondaryButton } from "../../../components/secondaryButton/SecondaryButton";
import { PrimaryButton } from "../../../components/primaryButton/PrimaryButton";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let addGoal = "";
let addGoalDesc = "";
let goalsTitle = "";
let goalsDesc = "";
let addGoalBtn = "";
let manageGoalsTitle = "";
let saveGoal = "";
let cancelGoal = "";

if (currentLang === "en") {
  addGoal = "Add New Goal";
  addGoalDesc = "Add a personal health goal you would like to track.";
  goalsTitle = "Goals";
  goalsDesc =
    "Manage your health by tracking care plan goals and creating  your own goals.";
  addGoalBtn = "Add New";
  manageGoalsTitle = "Manage Goals";
  saveGoal = "Save";
  cancelGoal = "Cancel";
} else if (currentLang === "es") {
  addGoal = "Agregar Meta";
  addGoalDesc = "Agrega una meta personal de salud.";
  goalsTitle = "Metas";
  goalsDesc = "Seguimiento y creación de objetivos";
  addGoalBtn = "Agregar nuevo";
  manageGoalsTitle = "Administrar";
  saveGoal = "Guardar";
  cancelGoal = "Cancelar";
}

export const HealthGoals = () => {
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
      <Header />
      <div className="mobile-scroll-health">
        <section className="health-page">
          <div className="healthIn-container">
            {addNewGoal ? (
              <>
                <p className="text-title startS-title-text">{addGoal}</p>
                <p className="text-smallText">{addGoalDesc}</p>
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
                    {goalsTitle}
                  </p>
                  <p className="text-midText reset margin text-left">
                    {goalsDesc}
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
              text={cancelGoal}
              customClass="healthIn-goals-btn"
              fn={() => setManageGoals(false)}
            />
            <PrimaryButton
              text={saveGoal}
              customClass="healthIn-goals-btn"
              fn={() => saveGoals()}
            />
          </>
        ) : addNewGoal ? (
          <>
            <SecondaryButton
              text={cancelGoal}
              customClass="healthIn-goals-btn"
              fn={() => closeAddGoal(false)}
            />
            <PrimaryButton
              text={saveGoal}
              customClass="healthIn-goals-btn"
              fn={() => saveAddedGoal(false)}
            />
          </>
        ) : (
          <>
            <SecondaryButton
              text={addGoalBtn}
              customClass="healthIn-goals-btn"
              icon={true}
              fn={() => toggleAddGoal(true)}
            />
            <PrimaryButton
              text={manageGoalsTitle}
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
