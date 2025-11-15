import React from "react";

export default function ProgressBar({ className, currentValue, maxValue }) {
  return (
    <div className={`progress-wrapper ${className}`}>
      <progress className={className} max={maxValue} value={currentValue}></progress>
    </div>
  );
}