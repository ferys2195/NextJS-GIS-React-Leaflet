import React from "react";

export default function MenuContent() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li>
          <div>
            <label htmlFor="">Masking</label>
            <input
              type="range"
              min={0}
              max="100"
              value="40"
              className="range range-xs"
            />
          </div>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
}
