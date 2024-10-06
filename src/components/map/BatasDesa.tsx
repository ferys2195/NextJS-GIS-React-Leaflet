import React from "react";
import { LayersControl, GeoJSON } from "react-leaflet";
import batasDesa from "@/data/geojson/pamalian.json";
import makeLineString from "@/utils/geojson-converter";
import LabelPoint from "../LabelPoint";

const { coordinates } = batasDesa.features[0].geometry;
const desaCamba = [...coordinates.slice(47, 49), ...coordinates.slice(0, 28)];
const desaSoren = coordinates.slice(27, 32);
const desaSimpur = coordinates.slice(31, 44);
const desaRasauTumbuh = coordinates.slice(43, 45);
const desaPatai = coordinates.slice(44, 46);
const desaLuwukRanggan = coordinates.slice(45, 48);

const geoJsonData: any = {
  type: "FeatureCollection",
  features: [
    makeLineString("Desa Camba", "red", desaCamba),
    makeLineString("Desa Soren", "blue", desaSoren),
    makeLineString("Desa Simpur", "green", desaSimpur),
    makeLineString("Desa RasauTumbuh", "orange", desaRasauTumbuh),
    makeLineString("Desa Patai", "purple", desaPatai),
    makeLineString("Desa LuwukRanggan", "cyan", desaLuwukRanggan),
  ],
};
// Fungsi untuk mengatur style GeoJSON
const onEachFeature = (feature: any, layer: any) => {
  if (feature.properties && feature.properties.name) {
    layer.bindPopup(feature.properties.name);
  }
};

// Fungsi untuk mengatur style berdasarkan properti `color`
const style = (feature: any) => {
  return {
    color: feature.properties.color,
    weight: 4,
  };
};

export default function BatasDesa() {
  return (
    <>
      <LayersControl.Overlay name="Tampilkan Batas Desa">
        <GeoJSON
          data={geoJsonData}
          style={style}
          onEachFeature={onEachFeature}
        />
      </LayersControl.Overlay>
    </>
  );
}
