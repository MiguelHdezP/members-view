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
  maxLength = 0,
  name = "",
  placeholder = "",
  type = "",
  value = "",
}) => {
  const [charAllowed, setCharAllowed] = useState(true);
  const [dateText, setDateText] = useState(true);

  const inputData = (e) => {
    let value = e.currentTarget.value;
    if (type === "text") {
      setCharAllowed(OnlyAlpha(value));
    } else if (type === "date") {
      // setCharAllowed(OnlyNumbers(value));
      console.log(transformValidate(value));
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
    />
  );
};
