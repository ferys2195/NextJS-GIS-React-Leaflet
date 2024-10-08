import React from 'react'

import { GeoJSON } from 'react-leaflet';

interface BidangTanahProps {
    geoJsonData: any;
}

const style = (feature:any) => {
    if (feature.properties.registration.is_register) {
      return {
        color: "#0f0f0f",
        weight: 0.5,
        fillColor: "#ff8c00",
        fillOpacity: 0.6,
      };
    } else {
      return {
        color: "#0f0f0f",
        weight: 0.5,
        fillColor: "#008000",
        fillOpacity: 0.6,
      };
    }
  };

  const onEachFeature = (feature:any, layer:any) => {
    let popupMessage;
    if (feature.properties.registration.is_register) {
      popupMessage = `
        <h6>Terdaftar <i class="bi bi-patch-check-fill text-info"></i></h6>
        <small class="d-block">No. Register Desa : ${feature.properties.registration.desa.nomor}</small>
        <small class="d-block">Tgl. Register Desa : ${feature.properties.registration.desa.tanggal}</small>
        <hr/>
        <small class="d-block">No. Register Kecamatan : ${feature.properties.registration.kecamatan.nomor ?? "-"}</small>
        <small class="d-block">Tgl. Register Kecamatan : ${feature.properties.registration.kecamatan.tanggal ?? "-"}</small>
      `;
    } else {
      popupMessage = `<small>Belum Terdaftar</small>`;
    }
    layer.bindPopup(popupMessage);
    layer.on("mouseover", function (e:any) {
      e.target.setStyle({
        color: "#1B2430",
        weight: 3,
        fillOpacity: 1,
      });
    });
    layer.on("mouseout", function (e:any) {
        e.target.setStyle({
        color: "#0f0f0f",
        weight: 0.5,
        fillOpacity: 0.6,
      });
    });
  };

export default function BidangTanah({geoJsonData}:BidangTanahProps) {
  return (
    <GeoJSON data={geoJsonData} onEachFeature={onEachFeature} style={style} />
  )
}
