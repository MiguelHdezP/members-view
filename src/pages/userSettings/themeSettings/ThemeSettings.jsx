import React, { useState } from "react";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { redirect } from "../../../utils/scripts";

export const ThemeSettings = ({ fn }) => {
  const [uglyReset, setUglyReset] = useState(true);
  const [uglyReset2, setUglyReset2] = useState(false);
  const [uglyReset3, setUglyReset3] = useState(false);

  const themeb = sessionStorage.getItem("theme") ?? "";

  const handleChange = (e) => {
    const valueTheme = e.target.value;
    if (valueTheme === "def") {
      sessionStorage.setItem("theme", "default");
      setUglyReset(true);
      setUglyReset2(false);
      setUglyReset3(false);
    } else if (valueTheme === "corp") {
      sessionStorage.setItem("theme", "corp");
      setUglyReset(false);
      setUglyReset2(true);
      setUglyReset3(false);
    } else if (valueTheme === "dark") {
      sessionStorage.setItem("theme", "dark");
      setUglyReset(false);
      setUglyReset2(false);
      setUglyReset3(true);
    }
    redirect("/userSettings");
  };

  return (
    <div className="settings-container">
      <Breadcrumb text={uglyReset ? "Settings" : "Configuración"} fn={fn} />
      <div className="settings-titles">
        <p className="text-title settings-title-bottom">Theme Settings</p>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <input
              type="radio"
              id="def"
              name="fav_language"
              value="def"
              onChange={handleChange}
              checked={themeb === "default" ? true : uglyReset2}
            />
             <label htmlFor="def">Default</label>
          </div>
          <div>
            <input
              type="radio"
              id="corp"
              name="fav_language"
              value="corp"
              onChange={handleChange}
              checked={themeb === "corp" ? true : uglyReset2}
            />
             <label htmlFor="corp">Brand</label>
          </div>
          <div>
            <input
              type="radio"
              id="dark"
              name="fav_language"
              value="dark"
              onChange={handleChange}
              checked={themeb === "dark" ? true : uglyReset3}
            />
             <label htmlFor="dark">Dark</label>
          </div>
        </div>
      </div>
    </div>
  );
};
