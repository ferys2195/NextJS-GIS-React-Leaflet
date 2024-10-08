import React from "react";
import MenuButton from "./MenuButton";
import MenuContent from "./MenuContent";

export default function MenuDrawer() {
  return (
    <div className="fixed top-2 left-2 z-[1000]">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <MenuButton />
        <MenuContent />
      </div>
    </div>
  );
}
