import React from "react";

interface OpacityControlProps {
  opacity: number;
  setOpacity: (opacity: number) => void;
  className?: string;
}

export default function OpacityControl({
  opacity,
  setOpacity,
  className,
}: OpacityControlProps) {
  return (
    <div
      className={`fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg z-[1000] opacity-75 ${className}`}
    >
      <label htmlFor="opacity-slider">
        Adjust Mask Opacity: {Math.round(opacity * 100)}%
      </label>
      <input
        id="opacity-slider"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={opacity}
        onChange={(e) => setOpacity(parseFloat(e.target.value))}
        style={{ marginLeft: "10px", width: "150px" }}
      />
    </div>
  );
}
