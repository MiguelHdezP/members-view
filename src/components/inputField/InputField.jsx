import React, { useState } from "react";
import "./InputField.scss";
import {
  OnlyAlpha,
  transformValidate,
  OnlyNumbers,
} from "../../utils/inputValidation";

export const InputField = ({
  customClass = "",
  disabled = false,
  fn = () => {},
  min = "",
  maxLength = 10,
  name = "",
  placeholder = "",
  type = "",
  value = "",
  fakeType = "",
}) => {
  const [charAllowed, setCharAllowed] = useState(true);

  const inputData = (e) => {
    let value = e.currentTarget.value;
    if (fakeType === "text") {
      setCharAllowed(OnlyAlpha(value));
    } else if (fakeType === "date") {
      setCharAllowed(OnlyNumbers(value));
    }
  };

  return (
    <input
      className={`inputField ${customClass} ${
        charAllowed ? "" : "input-error"
      }`}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      onClick={() => fn()}
      onChange={(e) => inputData(e)}
      disabled={disabled}
    />
  );
};
