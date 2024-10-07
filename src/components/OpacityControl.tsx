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
      className={`fixed bottom-4 left-36 transform -translate-x-1/2 bg-white py-2 px-3 rounded-lg shadow-xl z-[1000] opacity-75 ${className}`}
    >
      <div className="flex items-center justify-center">
        <label htmlFor="opacity-slider" className="mx-2">
          <small>{Math.round(opacity * 100)}%</small>
        </label>
        <input
          id="opacity-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
          // orient="vertical"
          style={{
            // marginLeft: "10px",
            width: "150px",
          }}
        />
        <label htmlFor="opacity-slider" className="mx-2">
          <small>100%</small>
        </label>
      </div>
    </div>
  );
}
