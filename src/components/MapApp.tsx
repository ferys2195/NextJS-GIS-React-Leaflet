// components/Map.js
import {
  MapContainer,
  Polygon,
  TileLayer,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapLayerControl from "./MapLayerControl";
import React, { useState } from "react";
import MaskingOutbox from "./MaskingOutbox";
import OpacityControl from "./OpacityControl";
import MapLegend from "./MapLegend";
import MenuDrawer from "./MenuDrawer/MenuDrawer";

const POSITION_CLASSES = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

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
        zoomControl={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <ZoomControl position="bottomright" />
        <MapZoomListener />
        <MapLayerControl opacity={opacity} setOpacity={setOpacity} />
        <MaskingOutbox opacity={opacity} />
        <MapLegend />
      </MapContainer>
      <OpacityControl opacity={opacity} setOpacity={setOpacity} />
      <MenuDrawer />
    </>
  );
};

export default MapApp;
