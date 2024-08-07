"use client";
import React, { useRef } from "react";
import "./Galerija.css";
import SectionWrapper from "../utilities/SectionWraper";

import dynamic from "next/dynamic";

const Pictures = dynamic(() => import("../utilities/Pictures/Pictures"), {
  ssr: false,
});

const Gallery = () => {
  const scrollRef = useRef(null);

  return (
    <div className="galerija flex__center">
      <div className="galerija-content ">
        <h1 className="text-5xl text-[#ffd400] font-bold text-center">
          Фото галерија
        </h1>
      </div>
      <div className="galerija-images">
        <div className="galerija-images_container" ref={scrollRef}>
          <Pictures />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Gallery, "galerija");
