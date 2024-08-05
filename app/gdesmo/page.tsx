"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("../components/Maps/Maps"), { ssr: false });

const GdeSmo = () => {
  return (
    <div className="mt-20 min-h-[100vh]">
      <h1 className="text-5xl text-[#ffd400] font-bold text-center mb-20">
        Посетите нас лично
      </h1>
      <MyMap />
    </div>
  );
};

export default GdeSmo;
