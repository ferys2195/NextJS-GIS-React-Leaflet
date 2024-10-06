export default function LayerMaps() {
  return [
    {
      name: "ArcGIS",
      url: "//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribute:
        "&copy; Esri &mdash; Sources: Esri, DigitalGlobe, Earthstar Geographics, CNES/Airbus DS, GeoEye, USDA FSA, USGS, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community",
    },
    {
      name: "Open Street Map",
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribute: "© OpenStreetMap",
    },
  ];
}
