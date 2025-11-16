import React from "react";
import clsx from "clsx";

export default function Button({ children, className, ...rest }) {
  const allClassnames = clsx(`btn-size fs-4 bold-text ${className}`);

  return (
      <button className={allClassnames} {...rest}>
        {children}
      </button>
  );
}
