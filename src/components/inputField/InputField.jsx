import React, { useState, useRef, useEffect } from "react";
import "./InputField.scss";
import { OnlyAlpha, OnlyNumbers } from "../../utils/inputValidation";

export const InputField = ({
  id = "",
  customClass = "",
  disabled = false,
  fn = () => {},
  maxLength = 10,
  placeholder = "",
  type = "",
  fakeType = "",
  error = false,
}) => {
  const [charAllowed, setCharAllowed] = useState(error);
  const inputRef = useRef(null);

  useEffect(() => {
    setCharAllowed(error);
  }, [error]);

  const focusNext = () => {
    const inputCurrent = inputRef.current;
    if (
      inputCurrent.type === "tel" &&
      inputRef !== null &&
      inputCurrent.nextSibling !== null
    )
      inputCurrent.nextSibling.focus();
  };

  const inputData = (e) => {
    let value = e.currentTarget.value;
    if (fakeType === "text") {
      setCharAllowed(!OnlyAlpha(value));
    } else if (fakeType === "date") {
      setCharAllowed(!OnlyNumbers(value));
    }
  };

  return (
    <input
      id={id}
      ref={inputRef}
      className={`inputField ${customClass} ${
        charAllowed ? "input-error" : ""
      }`}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      onClick={() => fn()}
      onChange={(e) => inputData(e)}
      onKeyUp={focusNext}
      disabled={disabled}
    />
  );
};
