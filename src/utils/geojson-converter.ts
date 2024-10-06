export default function makeLineString(
  title: string,
  color: string,
  coordinates: any
) {
  return {
    type: "Feature",
    properties: {
      name: title,
      color: color,
    },
    geometry: {
      type: "LineString",
      coordinates: coordinates,
    },
  };
}
