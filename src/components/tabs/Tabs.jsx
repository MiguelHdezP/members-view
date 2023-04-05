import React, { useState } from "react";
import "./Tabs.scss";
import { Divider } from "../divider/Divider";

export const Tabs = ({ tabsList = [], fn = () => {}, tabsContents = [] }) => {
  const [toggleActive, setToggleActive] = useState(1);
  if (!tabsContents.length) return <div>Sorry, something went wrong</div>;
  const tabsAction = (id) => {
    setToggleActive(id);
  };

  return (
    <>
      <div className="tabs">
        {tabsContents.map((obj) => {
          const { id, label, component } = obj;
          return (
            <div className="tabs-container" key={id}>
              <button
                className={`tabs-btn ${
                  toggleActive === id ? "tabs-btn-active tabs-secondary" : ""
                }`}
                onClick={() => tabsAction(id)}
              >
                {label}
              </button>
              <Divider customClass="tabsIndividualDivider" />
            </div>
          );
        })}
      </div>
      <Divider customClass="tabsDivider" />
      <div className="tabs-contents">
        {tabsContents.map((ele) => {
          const { id, component } = ele;
          if (id === toggleActive)
            return (
              <div className="tabs-contents-component" key={id}>
                {component}
              </div>
            );
        })}
      </div>
    </>
  );
};
