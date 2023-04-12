import React from "react";
import "./LoaderSection.scss";
import { CommonLoading } from "react-loadingg";
// loader source https://github.com/Summer-andy/react-loading?ref=morioh.com&utm_source=morioh.com

export const LoaderSection = ({ customClass = "" }) => {
  return (
    <div className={`load-section ${customClass}`}>
      <CommonLoading color="#fff" />
    </div>
  );
};
