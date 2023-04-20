import React, { useState } from "react";
import "./Tabs.scss";
import { Divider } from "../divider/Divider";

export const Tabs = ({
  tabsContents = [],
  customClass = "",
  customClassTab1 = "",
  customClassTab2 = "",
}) => {
  const [toggleActive, setToggleActive] = useState(1);
  if (!tabsContents.length) return <div>Sorry, something went wrong</div>;
  const tabsAction = (id) => {
    setToggleActive(id);
  };

  return (
    <>
      <div className={`tabs ${customClass}`}>
        {tabsContents.map((obj) => {
          const { id, label } = obj;
          return (
            <div className="tabs-container" key={id}>
              <button
                className={`tabs-btn ${
                  toggleActive === id ? "tabs-btn-active tabs-secondary" : ""
                } ${id === 1 ? customClassTab1 : ""} ${
                  id === 2 ? customClassTab2 : ""
                } `}
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
          if (id === toggleActive) {
            return (
              <div className="tabs-contents-component" key={id}>
                {component}
              </div>
            );
          }
          return "";
        })}
      </div>
    </>
  );
};
