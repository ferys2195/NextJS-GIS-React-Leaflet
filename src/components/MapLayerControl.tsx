import { LayersControl } from "react-leaflet";
import React, { useState } from "react";
import { ControlPosition } from "leaflet";
import MapBaseLayer from "./map/BaseLayer";
import BatasDesa from "./map/BatasDesa";
import OpacityControl from "./OpacityControl";

interface MapLayerControlProps {
  position?: ControlPosition;
  opacity: number;
  setOpacity: (opacity: number) => void;
}

export default function MapLayerControl({
  position = "topright",
  opacity,
  setOpacity,
}: MapLayerControlProps) {
  return (
    <>
      <LayersControl position={position}>
        <MapBaseLayer />
        <BatasDesa />
      </LayersControl>
    </>
  );
}
