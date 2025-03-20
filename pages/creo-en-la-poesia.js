import React from "react";
import "../src/app/globals.css";
import Navigation from "@/components/Navigation";

const FlipbookViewerTwo = () => {
  return (
    <div className="py-10 bg-[#f5deb3] min-h-screen relative">
      <Navigation />
      <div className='mb-14 text-center mt-36'>
          <h1 className='font-bold text-4xl mb-3'>CREO EN LA POESÍA</h1>
          <p className='text-xl'>Producciones  poéticos de los participantes en esta Experiencia</p>
      </div>
      <div
        style={{
          position: "relative",
          paddingTop: "max(60%, 324px)",
          width: "100%",
          height: 0,
        }}
      >
        <iframe
          style={{
            position: "absolute",
            border: "none",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          }}
          src="https://online.fliphtml5.com/ugitn/atrk/"
          seamless="seamless"
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default FlipbookViewerTwo;
