import React from "react";
import clsx from "clsx";
import Button from "./Button.jsx";

export default function CategoryButton({ children, src, category, className }) {
  const iconSrc = src ? src : "";
  //let btnClassnames = clsx(`desktop-btn fs-6 ${className}`);
  let iconBox = clsx(`icon-box ${category}`);

  return (
    <Button className={`btn-content btn-size fs-4 ${className}`}>
      <div className={iconBox}>
        <img className="icon" src={iconSrc} alt={`${category} icon`} />
      </div>
      {children}
    </Button>
  );
}
