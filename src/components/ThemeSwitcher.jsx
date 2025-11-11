import React from "react";
import sunIcon from "/assets/images/icon-sun-dark.svg";


export default function ThemeSwitcher() {
  return (
    <div className="theme-switcher">
      <i className="sun">☀️</i>
      <label className="switch">
        <input type="checkbox" id="theme-toggle" />
        <span className="slider"></span>
      </label>
      <i className="moon">🌙</i>
    </div>
  );
}

