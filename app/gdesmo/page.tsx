"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("../components/Maps/Maps"), { ssr: false });

const GdeSmo = () => {
  return (
    <div className="mt-20">
      <h1 className="text-5xl text-[#ffd400] font-bold text-center mb-20">
        Posetite nas licno
      </h1>
      <MyMap />
    </div>
  );
};

export default GdeSmo;
