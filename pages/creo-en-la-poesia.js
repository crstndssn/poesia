import React from "react";
import "../src/app/globals.css";
import Navigation from "@/components/Navigation";

const FlipbookViewerTwo = () => {
  return (
    <div className="py-10 bg-[#f5deb3] min-h-screen relative">
      <Navigation />
      <div
        style={{
          position: "relative",
          paddingTop: "max(60%, 324px)",
          width: "100%",
          height: 0,
        }}
      >
        {/* Superposición para ocultar elementos */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "30%",
            height: "72px", // Altura del logo a cubrir
            backgroundColor: "#f5deb3", // Color del fondo para simular el mismo diseño
            zIndex: 7,
          }}
        ></div>
        <iframe
          style={{
            position: "absolute",
            border: "none",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          }}
          src="https://online.fliphtml5.com/ugitn/ggvn/"
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
