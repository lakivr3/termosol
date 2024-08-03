"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "@/public/pop.png";
import termosol from "@/public/termosol-logo.png";
import Image from "next/image";

const position: [number, number] = [42.50409, 21.86497];

const MyMap: React.FC = () => {
  return (
    <div>
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={L.icon({
            iconUrl: markerIconPng.src,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
        >
          <Popup>
            <Image src={termosol} width={200} height={150} alt="termosol" />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
