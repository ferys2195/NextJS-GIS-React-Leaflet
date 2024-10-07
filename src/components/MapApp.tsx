// components/Map.js
import { MapContainer, Polygon, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapLayerControl from "./MapLayerControl";
import React, { useState } from "react";
import MaskingOutbox from "./MaskingOutbox";
import OpacityControl from "./OpacityControl";
import MapLegend from "./MapLegend";

const MapApp = () => {
  const [opacity, setOpacity] = useState<number>(0.5);
  const [zoomLevel, setZoomLevel] = useState(15);

  const MapZoomListener = () => {
    useMapEvents({
      zoomend: (e) => {
        setZoomLevel(e.target.getZoom());
      },
    });
    return null;
  };

  return (
    <>
      <MapContainer
        center={[-2.2556399, 112.8491973]}
        zoom={zoomLevel}
        minZoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <MapZoomListener />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data © OpenStreetMap contributors"
        />
        <MapLayerControl opacity={opacity} setOpacity={setOpacity} />
        <MaskingOutbox opacity={opacity} />
        <MapLegend />
      </MapContainer>
      <OpacityControl opacity={opacity} setOpacity={setOpacity} />
    </>
  );
};

export default MapApp;
