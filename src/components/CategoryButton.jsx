import React from "react";
import clsx from "clsx";
import Button from "./Button.jsx";

export default function CategoryButton({ children, src, className, onClick }) {
  const iconSrc = src ? src : "";
  const category = children.toLowerCase();
  
  let iconBox = clsx(`icon-box ${category}`);

  return (
    <Button onClick={() => onClick(children)} className={`btn-content btn-size fs-6 ${className}`}>
      <div className={iconBox}>
        <img className="icon" src={iconSrc} alt={`${category} icon`} />
      </div>
      {children}
    </Button>
  );
}
