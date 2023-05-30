import React, { useState } from "react";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";

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

  return (
    <div className="settings-container">
      <Breadcrumb text={lang === "en" ? "Settings" : "Configuración"} fn={fn} />
      <div className="settings-titles">
        <p className="text-title settings-title-bottom">
          {lang === "en" ? "Language Settings" : "Configuración de Idioma"}
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <input
              type="radio"
              id="en"
              name="fav_language"
              value="en"
              onChange={handleChange}
              checked={lang === "en" ? true : false}
            />
             
            <label htmlFor="en">
              {lang === "en" ? "English (system default)" : "Inglés"}
            </label>
          </div>
          <div>
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
