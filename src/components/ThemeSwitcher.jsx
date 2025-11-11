import React from "react";
import sunIconDark from "/assets/images/icon-sun-dark.svg";
import moonIconDark from "/assets/images/icon-moon-dark.svg"
import sunIconLight from "/assets/images/icon-sun-light.svg"
import moonIconLight from "/assets/images/icon-moon-light.svg"
import { useThemeContext } from "../context/ThemeContext";

export default function ThemeSwitcher() {

  const { theme, toggleTheme } = useThemeContext();

  const sunIcon = theme === "light" ? sunIconDark : sunIconLight;
  const moonIcon = theme === "light" ? moonIconDark : moonIconLight;

  return (
    <div className="theme-switcher">
      <img src={sunIcon} alt="sun icon" />
      <label className="switch">
        <input type="checkbox" id="theme-toggle" onChange={toggleTheme}/>
        <span className="slider"></span>
      </label>
      <img src={moonIcon} alt="moon icon" />
    </div>
  );
}

