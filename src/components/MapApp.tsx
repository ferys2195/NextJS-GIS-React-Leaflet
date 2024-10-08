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
import React, { useEffect, useState } from "react";
import MaskingOutbox from "./MaskingOutbox";
import OpacityControl from "./OpacityControl";
import MapLegend from "./MapLegend";
import MenuDrawer from "./MenuDrawer/MenuDrawer";
import BidangTanah from "./BidangTanah";

const POSITION_CLASSES = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

const MapApp = () => {
  const [opacity, setOpacity] = useState<number>(0.5);
  const [zoomLevel, setZoomLevel] = useState(15);
  const [geoJsonData, setGeoJsonData] = useState(null)

  const MapZoomListener = () => {
    useMapEvents({
      zoomend: (e) => {
        setZoomLevel(e.target.getZoom());
      },
    });
    return null;
  };

  useEffect(()=>{
   const getTanah = async ()=> {
      const response = await fetch('http://localhost:8000/api/tanah')
      const data = await response.json()
      setGeoJsonData(data)
    }
    getTanah()
  },[])

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
        {geoJsonData && <BidangTanah geoJsonData={geoJsonData}/>}
      </MapContainer>
      <OpacityControl opacity={opacity} setOpacity={setOpacity} />
      <MenuDrawer />
    </>
  );
};

export default MapApp;
