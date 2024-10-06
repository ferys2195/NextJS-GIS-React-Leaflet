"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const MapApp = dynamic(() => import("../components/MapApp"), { ssr: false });

export default function Home() {
  return <MapApp />;
}
