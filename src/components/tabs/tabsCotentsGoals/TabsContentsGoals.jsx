import React, { useEffect, useState } from "react";
import "./TabsContentsGoals.scss";
import { goalsTabs } from "../../../data/mockedData";
import { BoxCard } from "../../boxCard/BoxCard";

const InProgressSection = ({
  manageGoals = false,
  fn,
  hideGoal,
  saveNewGoal,
}) => {
  const [textareaVals, setTextAreaVals] = useState({});
  let newGoalVal = "";

  if (manageGoals === false) fn(textareaVals);

  const textVals = (e) => {
    let obj = {
      id: e.currentTarget.id,
      text: e.currentTarget.value,
    };
    setTextAreaVals(obj);
  };

  if (saveNewGoal) {
    newGoalVal = localStorage.getItem("newGoal") || "Personal Message";
  }

  return (
    <div className="tabs-goals">
      {hideGoal ? (
        <BoxCard customClass="tabs-goals-card">
          <div className="tabs-goals-withInputs">
            {manageGoals ? (
              <input type="checkbox" className="tabs-input-checkbox" />
            ) : (
              ""
            )}
            <p className="text-midText startS-title-text tabs-goals-textLeft">
              Schedule virtual appointments with my care manager
            </p>
          </div>
          {manageGoals ? (
            <textarea
              name=""
              id="1"
              cols={30}
              rows={4}
              className="tabs-textarea"
              onChange={(e) => textVals(e)}
            ></textarea>
          ) : (
            ""
          )}
          <div className="text-smallText tabs-goals-pill-careplan reset-margin">
            Care Plan
          </div>
        </BoxCard>
      ) : (
        ""
      )}
      {saveNewGoal ? (
        <BoxCard customClass="tabs-goals-card">
          <div className="tabs-goals-withInputs">
            {manageGoals ? (
              <input type="checkbox" className="tabs-input-checkbox" />
            ) : (
              ""
            )}
            <p className="text-midText startS-title-text tabs-goals-textLeft">
              {newGoalVal}
            </p>
          </div>
          {manageGoals ? (
            <textarea
              name=""
              id="1"
              cols={30}
              rows={4}
              className="tabs-textarea"
              onChange={(e) => textVals(e)}
            ></textarea>
          ) : (
            ""
          )}
          <div className="text-smallText tabs-goals-pill-personal reset-margin">
            Personal
          </div>
        </BoxCard>
      ) : (
        ""
      )}
    </div>
  );
};

const CompletedSection = ({ textValues = { id: "", text: "" } }) => {
  if (Object.keys(textValues).length !== 0) {
    localStorage.setItem("completedTabs", JSON.stringify(textValues));
  }
  const { id, text } = textValues;

  return (
    <div className="tabs-goals">
      {parseInt(id) === 1 ? (
        <BoxCard customClass="tabs-goals-card">
          <div className="tabs-goals-withInputs">
            <p className="text-midText startS-title-text tabs-goals-textLeft">
              Schedule virtual appointments with my care manager
            </p>
          </div>
          <p className="text-smallText reset-margins completed-text-gray">
            Note: {text}
          </p>
          <div className="text-smallText tabs-goals-pill-careplan reset-margin">
            Care Plan
          </div>
        </BoxCard>
      ) : (
        ""
      )}

      {parseInt(id) === 2 ? (
        <BoxCard customClass="tabs-goals-card">
          <div className="tabs-goals-withInputs">
            <p className="text-midText startS-title-text tabs-goals-textLeft">
              Make healthy food choices and learn more about the diabetic diet
            </p>
          </div>
          <p className="text-smallText reset-margins completed-text-gray">
            Note: {text}
          </p>
          <div className="text-smallText tabs-goals-pill-careplan reset-margin">
            Care Plan
          </div>
        </BoxCard>
      ) : (
        ""
      )}

      {parseInt(id) === 3 ? (
        <BoxCard customClass="tabs-goals-card">
          <div className="tabs-goals-withInputs">
            <p className="text-midText startS-title-text tabs-goals-textLeft">
              Eat letss fast food
            </p>
          </div>
          <p className="text-smallText reset-margins completed-text-gray">
            Note: {text}
          </p>
          <div className="text-smallText tabs-goals-pill-personal reset-margin">
            Personal
          </div>
        </BoxCard>
      ) : (
        ""
      )}
    </div>
  );
};

let goalsContents = [...goalsTabs];

export let TabsContentsGoals = (
  manageGoals = false,
  textareaVal = {},
  setTextAreaVal,
  hideGoal,
  saveNewGoal
) => {
  useEffect(() => {}, [textareaVal]);
  const renderVals = (val) => {
    setTextAreaVal(val);
  };
  return goalsContents.map((ele, i) => {
    if (ele.id === 1)
      ele.component = (
        <InProgressSection
          manageGoals={manageGoals}
          fn={renderVals}
          hideGoal={hideGoal}
          saveNewGoal={saveNewGoal}
        />
      );
    if (ele.id === 2)
      ele.component = (
        <CompletedSection manageGoals={manageGoals} textValues={textareaVal} />
      );
    return ele;
  });
};
