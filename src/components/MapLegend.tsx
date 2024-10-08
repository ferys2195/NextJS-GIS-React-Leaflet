import React from "react";
import batasDesa from "@/data/batas-desa";

const positionClass = "leaflet-bottom leaflet-right mb-5";

export default function MapLegend() {
  return (
    <div className={positionClass}>
      <div className="leaflet-control bg-white max-w-60 rounded shadow p-2 border-none">
        <h1 className="font-semibold">Batas Desa Pamalian</h1>
        <hr className="mb-2" />
        {batasDesa().map(({ title, color }) => {
          return (
            <div key={title} className="flex items-center gap-3">
              <span
                className={`w-5 h-2`}
                style={{ backgroundColor: color }}
              ></span>{" "}
              {title}
            </div>
          );
        })}
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
}
