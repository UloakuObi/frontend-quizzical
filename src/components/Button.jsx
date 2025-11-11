import React from "react";
import clsx from "clsx";

export default function Button({ children, className, ...rest }) {
  const allClassnames = clsx(`desktop-btn fs-6 ${className}`);

  return (
      <button className={allClassnames} {...rest}>
        {children}
      </button>
  );
}
