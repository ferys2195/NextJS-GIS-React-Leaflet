import LayerMaps from "@/utils/layer-maps";
import React from "react";
import { LayersControl, TileLayer } from "react-leaflet";

export default function MapBaseLayer() {
  return (
    <>
      {LayerMaps().map((layer, index) => {
        return (
          <LayersControl.BaseLayer
            key={index}
            name={layer.name}
            checked={index === 0}
          >
            <TileLayer
              maxZoom={20}
              maxNativeZoom={19}
              url={layer.url}
              attribution={layer.attribute}
            />
          </LayersControl.BaseLayer>
        );
      })}
    </>
  );
}
