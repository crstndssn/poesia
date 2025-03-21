"use client";
import { useState } from "react";

import React from "react";
import Navigation from "@/components/Navigation.js";
import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";

import Footer from "@/components/Footer";
import VerVideo from "@/components/VerVideo";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center md:items-start justify-center bg-[#fffff9] bg-[url('/38.png')] bg-no-repeat bg-cover bg-bottom">
        {" "}
        <Navigation />
        <div className="container mx-auto flex flex-col justify-center items-center max-h-screen md:min-h-[80vh] gap-10 mt-20 md:mt-[30px]">
          <div className="flex">
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ykzC-S0hcrs?si=ZpsHy4TwXQ-Ayhd0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}

            <div className="flex flex-col justify-center items-center gap-3">
              <div className="w-full xl:w-2/3 flex flex-col md:flex-row gap-2 justify-center items-center mt-7 md:mt-0">
                <div className="min-w-40 min-h-40 w-40 h-40 xl:min-w-48 xl:min-h-48 xl:w-48 xl:h-48 overflow-hidden rounded-full">
                  <Image
                    className="w-full h-full object-cover object-top"
                    src="/foto-portada.JPG"
                    alt="alt"
                    width={184}
                    height={86}
                  />
                </div>
                <h1 className="text-base md:text-[20px] leading-6 text-center md:text-left px-4">
                  Descubre aquí cómo la poesía, como proyecto vital, ha llevado
                  a <b>Amparo Andrade Loaiza</b>, a construir una experiencia
                  maravillosa y una propuesta pedagógica en relación con la
                  palabra y la vida en contextos signados por el conflicto
                  político militar.
                </h1>
              </div>
              <p className="w-full md::w-[70%] xl:w-[50%] text-base md:text-[17px] leading-6 text-center px-4">
                Su pasión por la vida y la palabra poética han hecho de ella,
                además de poeta, una investigadora constante, maestra por
                vocación, tallerista y conferencista internacional. Creadora y
                directora de la Red de Amor y Poesía, con más de tres mil
                suscriptores en trece países, promueve la escucha y lectura de
                poemas a través de WhatsApp, Instagram, Youtube y Tik Tok.
              </p>
              {/* <div className="mb-36 border-2 border-black rounded-lg p-4">
                <p>ver video</p>
              </div> */}

              <VerVideo/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
