import React, { useEffect, useState } from "react";
import "./TabsContentsCareVisits.scss";
import { careVisitTabs } from "../../../data/mockedData";
import { BoxCard } from "../../boxCard/BoxCard";

const InProgressSection = ({
  manageGoals = false,
  fn,
  hideGoal,
  saveNewGoal,
}) => {
  const [textareaVals, setTextAreaVals] = useState({});
  console.log("manage goals: ", manageGoals);
  if (manageGoals) {
    console.log("goals saved");
    fn(textareaVals);
  }

  const textVals = (e) => {
    let obj = {
      id: e.currentTarget.id,
      text: e.currentTarget.value,
    };
    setTextAreaVals(obj);
  };

  return (
    <div className="tabs-goals">
      {hideGoal ? (
        <>
          <BoxCard customClass="tabs-goals-card">
            <div className="tabs-goals-withInputs">
              {manageGoals ? (
                <input type="checkbox" className="tabs-input-checkbox" />
              ) : (
                ""
              )}
              <p className="text-midText startS-title-text tabs-goals-textLeft">
                No wellness visits in the last 12 months
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
        </>
      ) : (
        ""
      )}
      <BoxCard customClass="tabs-goals-card">
        <div className="tabs-goals-withInputs">
          {manageGoals ? (
            <input type="checkbox" className="tabs-input-checkbox" />
          ) : (
            ""
          )}
          <p className="text-midText startS-title-text tabs-goals-textLeft">
            No eye exam in the past 12 months
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
    </div>
  );
};

const InReview = ({ textValues = { id: "", text: "" } }) => {
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
              No wellness visits in the last 12 months
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

const CompletedSection = () => {
  return (
    <div className="tabs-goals">
      <BoxCard customClass="tabs-goals-card">
        <div className="tabs-goals-withInputs">
          <p className="text-midText startS-title-text tabs-goals-textLeft">
            No diabetes test in the past 6 months
          </p>
        </div>
        <div className="text-smallText tabs-goals-pill-careplan reset-margin">
          Care Plan
        </div>
      </BoxCard>
    </div>
  );
};

let careVisitsContents = [...careVisitTabs];

export let TabsContentsCareVisits = (
  manageGoals = false,
  textareaVal = {},
  setTextAreaVal,
  hideGoal,
  saveNewGoal
) => {
  useEffect(() => {}, [textareaVal]);
  const renderVals = (val) => {
    console.log("text area saved");
    setTextAreaVal(val);
  };
  return careVisitsContents.map((ele, i) => {
    if (ele.id === 1) {
      ele.component = (
        <InProgressSection
          manageGoals={manageGoals}
          fn={renderVals}
          hideGoal={hideGoal}
          saveNewGoal={saveNewGoal}
        />
      );
    } else if (ele.id === 2) {
      ele.component = (
        <InReview manageGoals={manageGoals} textValues={textareaVal} />
      );
    } else if (ele.id === 3) {
      ele.component = (
        <CompletedSection manageGoals={manageGoals} textValues={textareaVal} />
      );
    }
    return ele;
  });
};
