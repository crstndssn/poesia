"use client";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import React from "react";

import "@/app/globals.css";
import Descargar from "@/components/Descargar";
import Carta from "@/app/carta";
import Link from "next/link";
import Image from "next/image";
import Contenido from "@/components/Contenido";
import AudioList from "@/data/audiolist";

const audios = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen relative flex flex-col items-center justify-center
      
     bg-contain bg-center pt-16 pb-12 md:pt-32">

<div className="fixed top-0 left-0 w-full h-full -z-10">
  <Image
    className="w-full h-full object-cover
     object-bottom"
    src="/29DESKT.png"
    width={4000}
    height={3000}
    alt="Background"
  />
</div>
       
        <div className="relative W-full flex flex-col mb-7 text-center">
          <h1 className="font-bold text-4xl mb-3">SUSURROS Y CUCHICHEOS</h1>
          <p className="text-xl">Sonidos que hacen parte de esta historia</p>
        </div>
        <AudioList />
      </div>
    </>
  );
};

export default audios;
