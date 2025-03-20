import React from "react";
import "@/app/globals.css";
import Navigation from "@/components/Navigation";
import CountdownTimer from "@/components/CountdownTimer";

const videos = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/24.png')] bg-repeat-x bg-cover bg-center">
        
        <div className="container mx-auto flex flex-col mt-40">
        <div className="W-full mb-14 text-center">
          <h1 className="font-bold text-4xl mb-3">CRONOLOGÍA DE UN SUEÑO</h1>
          <p className="text-xl">Ires y venires en esta historia</p>
        </div>
          <h2 className="text-3xl font-bold">Martes de Poesia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/V5rKClYRY6w?si=1dFNDazdQ5dcGhM-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <h2 className="text-3xl font-bold">
            Sistematización Martes de Poesía. Clip 1.
          </h2>
          <section>
            <iframe
              width="315"
              height="560"
              src="https://www.youtube.com/embed/wn1iA7ZujAM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </section>

          <h2 className="text-3xl font-bold">
            Sistematización Martes de Poesía. Clip 2.
          </h2>
          <section>
            <iframe
              width="315"
              height="560"
              src="https://www.youtube.com/embed/2Hre_W9ZKrM"
              className="w-full rounded shadow-lg"
              title="Foro Educativo 2014"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>

          <h2 className="text-3xl font-bold">
            Sistematización Martes de Poesía. Clip 3.
          </h2>
          <section>
            <iframe
              width="315"
              height="560"
              src="https://www.youtube.com/embed/GdZZieUIQKk"
              className="w-full rounded shadow-lg"
              title="Foro Educativo 2014"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
        </div>
      </div>
    </>
  );
};

export default videos;
