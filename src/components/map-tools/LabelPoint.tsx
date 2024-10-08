import { LatLngExpression } from "leaflet";
import React from "react";
import { CircleMarker, Tooltip } from "react-leaflet";

interface labelPointProps {
  position: LatLngExpression;
  title: string;
}

export default function LabelPoint({ position, title }: labelPointProps) {
  return (
    <CircleMarker center={position} pathOptions={{ color: "red" }} radius={20}>
      <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
        P{title}
      </Tooltip>
    </CircleMarker>
  );
}

// example
/**
<CircleMarker
            center={[coord[1], coord[0]]}
            pathOptions={{ color: "red" }}
            radius={20}
          >
            <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
              P{index}
            </Tooltip>
          </CircleMarker>
 */
