import React from "react";
import { Polygon } from "react-leaflet";
import batasDesa from "@/data/geojson/pamalian.json";

const { coordinates }: any = batasDesa.features[0].geometry;
const swapCoordinates = (coords: []) => {
  return coords.map((coord) => [coord[1], coord[0]]);
};
const worldPolygon: any = [
  [
    [-90, -180],
    [-90, 180],
    [90, 180],
    [90, -180],
    [-90, -180],
  ],
];
interface MaskingOutboxProps {
  opacity: number;
}
export default function MaskingOutbox({ opacity }: MaskingOutboxProps) {
  return (
    <Polygon
      positions={[...worldPolygon, swapCoordinates(coordinates)]}
      pathOptions={{
        color: "#333333",
        fillColor: "white",
        fillOpacity: opacity,
      }}
    />
  );
}
