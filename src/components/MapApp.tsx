// components/Map.js
import { MapContainer, Polygon, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapLayerControl from "./MapLayerControl";
import React, { useState } from "react";
import MaskingOutbox from "./MaskingOutbox";
import OpacityControl from "./OpacityControl";

const MapApp = () => {
  const [opacity, setOpacity] = useState<number>(0.8);
  const [zoomLevel, setZoomLevel] = useState(15);

  const MapZoomListener = () => {
    useMapEvents({
      zoomend: (e) => {
        setZoomLevel(e.target.getZoom());
      },
    });
    return null;
  };

  const positionClass = "leaflet-bottom leaflet-right mb-5";

  const MinimapControl = () => {
    return (
      <div className={positionClass}>
        <div className="leaflet-control  bg-white w-40 h-[80px] rounded shadow p-2 border-none">
          <div className="">
            <span className="text-blue-500">-</span> Desa Patai
          </div>
        </div>
        {/* <div className="leaflet-control leaflet-bar">
          <div className="bg-yellow-500 w-[80px] h-[80px]">Block 2</div>
        </div>
        <div className="leaflet-control leaflet-bar">
          <div className="bg-green-500 w-[80px] h-[80px]">Block 3</div>
        </div>
        <div className="leaflet-control leaflet-bar">
          <div className="bg-blue-500 w-[80px] h-[80px]">Block 4</div>
        </div> */}
      </div>
    );
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
        <MinimapControl />
      </MapContainer>
      <OpacityControl
        className={zoomLevel > 13 ? "hidden" : ""}
        opacity={opacity}
        setOpacity={setOpacity}
      />
    </>
  );
};

export default MapApp;
