import React, { useState } from "react";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import "./LanguageSettings.scss";

export const LanguageSettings = ({ fn, lang = "en" }) => {
  const [uglyReset, setUglyReset] = useState(true);

  lang = sessionStorage.getItem("lang") ?? "en";

  const handleChange = (e) => {
    const valueLang = e.target.value;
    if (valueLang === "en") {
      sessionStorage.setItem("lang", "en");
      setUglyReset(!uglyReset);
    } else if (valueLang === "es") {
      sessionStorage.setItem("lang", "es");
      setUglyReset(!uglyReset);
    }
    window.location.reload();
  };

  let currentLang = "",
    englishType = "";

  if (lang === "en") {
    currentLang = "Language Settings";
    englishType = "English (system default)";
  } else if (lang === "es") {
    currentLang = "Configuración de Idioma";
    englishType = "Inglés";
  }

  return (
    <div className="settings-container">
      <Breadcrumb text={lang === "en" ? "Settings" : "Configuración"} />
      <div className="settings-titles">
        <p className="text-title settings-title-bottom">{currentLang}</p>
        <div className="languages">
          <div className="langague-container">
            <input
              type="radio"
              id="en"
              name="fav_language"
              value="en"
              onChange={handleChange}
              checked={lang === "en" ? true : false}
            />
             <label htmlFor="en">{englishType}</label>
          </div>
          <div className="langague-container">
            <input
              type="radio"
              id="es"
              name="fav_language"
              value="es"
              onChange={handleChange}
              checked={lang === "es" ? true : false}
            />
             <label htmlFor="es">Español</label>
          </div>
        </div>
      </div>
    </div>
  );
};
