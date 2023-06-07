import React, { useEffect, useRef, useState } from "react";
import "./InputSearch.scss";
import { IoMdClose, IoMdSend } from "react-icons/io";
import { IconContext } from "react-icons";

const currentLang = sessionStorage.getItem("lang") ?? "en";

let eduActis = "";

if (currentLang === "en") {
  eduActis = "Browse Content";
} else if (currentLang === "es") {
  eduActis = "Explorar Contenido";
}
export const InputSearch = ({ fn, inputValue = 0 }) => {
  const inputRef = useRef(null);
  const [visibleClose, setVisibleIcon] = useState(false);
  const [currentInputVal, setCurrentInputVal] = useState("");
  let titleChange = currentInputVal;

  useEffect(() => {}, [visibleClose, currentInputVal]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (inputRef !== null) {
      fn(inputRef.current.value);
    }
  };

  const handleCleanUp = () => {
    setVisibleIcon(false);
    inputRef.current.value = "";
    fn("");
  };

  const turnOnCleanBtn = (e) => {
    titleChange = e.currentTarget.value;
    setCurrentInputVal(titleChange);

    setVisibleIcon(true);
  };

  switch (inputValue) {
    case 1:
      titleChange = "Heart and blood vessels";
      break;
    case 2:
      titleChange = "Infections, vaccines, and public health";
      break;
    case 3:
      titleChange = "Mental Health";
      break;
    case 4:
      titleChange = "Healthy living, nutrition & movement";
      break;
    default:
      break;
  }

  const visibleCloseBtn = () => {
    if (visibleClose || titleChange.length) return true;
    else return false;
  };

  return (
    <form className="search-input" onSubmit={handleOnSubmit}>
      <div className="input-search-container">
        <input
          type="text"
          id="lname"
          name="lastname"
          value={titleChange}
          ref={inputRef}
          onChange={turnOnCleanBtn}
          placeholder="Search"
        />
        {visibleCloseBtn() ? (
          <IconContext.Provider
            value={{
              className: "input-icon-close",
            }}
          >
            <span onClick={handleCleanUp}>
              <IoMdClose />
            </span>
          </IconContext.Provider>
        ) : (
          ""
        )}
      </div>
      <div>
        <input type="submit" value="" />
        <IconContext.Provider
          value={{
            className: "input-icon-send",
          }}
        >
          <IoMdSend />
        </IconContext.Provider>
      </div>
    </form>
  );
};
/*
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="input-icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
              <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
<Autocomplete
      value={value}
      onChange={(ev, newValue) => setValue(newValue)}
      inputValue={inputValue}
      onInputChange={(ev, newInputValue) => handleChange(newInputValue)}
      id="controllable-states-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} placeholder="Search" />}
    />
*/
