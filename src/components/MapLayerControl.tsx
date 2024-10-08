import { LayersControl } from "react-leaflet";
import React, { useState } from "react";
import { ControlPosition } from "leaflet";
import MapBaseLayer from "./map/BaseLayer";
import BatasDesa from "./map/BatasDesa";

interface MapLayerControlProps {
  position?: ControlPosition;
}

export default function MapLayerControl({
  position = "topright"
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
