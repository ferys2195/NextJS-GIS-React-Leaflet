// components/Map.js
import { MapContainer, Polygon, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapLayerControl from "./MapLayerControl";
import React, { useEffect, useState } from "react";
import OpacityControl from "./OpacityControl";
import MapLegend from "./MapLegend";
import MaskingOutbox from "./map/MaskingOutbox";

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
  useEffect(()=>{
    const getTanah = async () => {
      const req = await fetch("http://localhost:8000/api/tanah")
      const res = await req.json()
      console.log(res)
    }
    getTanah()
  })
  return (
    <>
      <OpacityControl opacity={opacity} setOpacity={setOpacity} />
      <MapContainer
        center={[-2.2556399, 112.8491973]}
        zoom={zoomLevel}
        minZoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <MapZoomListener />
        <MapLayerControl />
        <MaskingOutbox opacity={opacity} />
        <MapLegend />
      </MapContainer>
    </>
  );
};

export default MapApp;
