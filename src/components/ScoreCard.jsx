import React from "react";
import clsx from "clsx";
import Logo from "./Logo.jsx";

export default function ScoreCard({ children, score, className }) {
  const cardClassnames = clsx(`score-card score-card-size ${className}`);
  const darkTheme = cardClassnames.split(" ").includes("dark-theme");
  const pTextClassname = darkTheme
    ? "score-card-dark-small-font fs-4"
    : "score-card-light-small-font fs-4";
  return (
    <div className={cardClassnames}>
      {children}
      <p className="fs-1">{score}</p>
      <p className={pTextClassname}>out of 10</p>
    </div>
  );
}
