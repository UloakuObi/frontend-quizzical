import React from "react";
import clsx from "clsx";


export default function Logo({ children, src, category, className }) {
  const logoContainer = clsx(`logo-container ${className}`)
  const iconBox = clsx(`icon-box ${category.toLowerCase()}`);

  return (
    <div className={logoContainer}>
      <div className={iconBox}>
        <img className="icon" src={src} alt={`${src} icon`} />
      </div>
      {children}
    </div>
  );
}

// The category will be gotten from a state change in the App
// You might need to derive the src from the category by string concatenation
