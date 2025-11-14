import React from "react";
import clsx from "clsx";
import Button from "./Button.jsx";
import iconCorrect from "/assets/images/icon-correct.svg";
import iconWrong from "/assets/images/icon-incorrect.svg";

export default function OptionButton({
  children,
  className,
  option,
  isChosen,
  isCorrect,
  showFeedback,
  onClick
}) {
  let btnClassnames = clsx(`btn-content btn-size fs-6 ${className}`);
  let optionIdBox = `option-badge`;

  const darkTheme = btnClassnames.split(" ").includes("dark-theme");
  const fontTheme = darkTheme && "light-theme-font";
  let fontColor = clsx(`option-text ${fontTheme}`);

  if (isChosen) {
    optionIdBox = "option-badge is-chosen";
    btnClassnames = clsx(
      `options-btn btn-size fs-6 chosen-outline ${className}`,
    );
  }

  if (isChosen && !darkTheme) {
    fontColor = clsx(`light-font`);
  }

  let feedback = null;
  let feedbackIcon = null;

  // All the Logic below will run when the submit button is clicked.
  if (showFeedback) {
    if (isChosen && isCorrect) {
      feedback = isChosen && isCorrect;
      feedbackIcon = iconCorrect;
      optionIdBox = `option-badge chosen-n-correct`;
      btnClassnames = clsx(
        `options-btn btn-size fs-6 chosen-correct-outline ${className}`,
      );
    } else if (isChosen && !isCorrect) {
      feedback = isChosen && !isCorrect;
      feedbackIcon = iconWrong;
      optionIdBox = `option-badge chosen-not-correct`;
      btnClassnames = clsx(
        `options-btn btn-size fs-6 chosen-not-correct-outline ${className}`,
      );
    } else if (!isChosen && isCorrect) {
      feedback = !isChosen && isCorrect;
      feedbackIcon = iconCorrect;
      btnClassnames = clsx(
        `options-btn btn-size fs-6 ${className}`,
      );
    }
  }

  return (
    <Button onClick={onClick} className={btnClassnames}>
      <div className="btn-content">
        <div className={optionIdBox}>
          <p className={fontColor}>{option}</p>
        </div>
        {children}
      </div>
      <div>{feedback ? <img src={feedbackIcon} /> : null}</div>
    </Button>
  );
}
