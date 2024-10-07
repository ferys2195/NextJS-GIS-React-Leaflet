import polygonPamalian from "@/data/geojson/pamalian.json";

const { coordinates } = polygonPamalian.features[0].geometry;
const desaCamba = [...coordinates.slice(47, 49), ...coordinates.slice(0, 28)];
const desaSoren = coordinates.slice(27, 32);
const desaSimpur = coordinates.slice(31, 45);
const desaRasauTumbuh = coordinates.slice(44, 46);
const desaPatai = coordinates.slice(45, 47);
const desaLuwukRanggan = coordinates.slice(46, 49);

const data = [
  {
    title: "Desa Camba",
    color: "#DFFF00",
    coordinates: desaCamba,
  },
  {
    title: "Desa Soren",
    color: "#FFBF00",
    coordinates: desaSoren,
  },
  {
    title: "Desa Simpur",
    color: "#FF7F50",
    coordinates: desaSimpur,
  },
  {
    title: "Desa Rasau Tumbuh",
    color: "#DE3163",
    coordinates: desaRasauTumbuh,
  },
  {
    title: "Desa Patai",
    color: "#9FE2BF",
    coordinates: desaPatai,
  },
  {
    title: "Desa Luwuk Ranggan",
    color: "#40E0D0",
    coordinates: desaLuwukRanggan,
  },
];

export default function batasDesa() {
  return data;
}
