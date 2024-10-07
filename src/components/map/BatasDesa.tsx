import React from "react";
import { LayersControl, GeoJSON } from "react-leaflet";
import makeLineString from "@/utils/geojson-converter";
import batasDesa from "@/data/batas-desa";

const geoJsonData: any = {
  type: "FeatureCollection",
  features: batasDesa().map((item: any) =>
    makeLineString(item.title, item.color, item.coordinates)
  ),
};
// Fungsi untuk mengatur style GeoJSON
const onEachFeature = (feature: any, layer: any) => {
  if (feature.properties && feature.properties.name) {
    layer.bindTooltip(feature.properties.name, {
      permanent: false,
      direction: "top",
    });

    layer.on("mouseover", function (e: any) {
      e.target.openTooltip();
    });

    layer.on("mouseout", function (e: any) {
      e.target.closeTooltip();
    });
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
