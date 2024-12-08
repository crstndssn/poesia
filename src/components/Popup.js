"use client";

import React from "react";

const Popup = ({ isVisible, onClose, title, content }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
        {/* Encabezado del Popup */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            className="text-black text-2xl font-bold"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Contenido dinámico */}
        <div className="mt-4 space-y-4">
          {content.map((item, index) => {
            switch (item.type) {
              case "text":
                return (
                  <div key={index} className="text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: item.value }} />
                );
              case "image":
                return (
                  <img
                    key={index}
                    src={item.value}
                    alt={item.alt || "Imagen de referencia"}
                    className="rounded-lg w-full"
                  />
                );
              case "audio":
                return (
                  <audio
                    key={index}
                    controls
                    className="w-full"
                  >
                    <source src={item.value} type="audio/mpeg" />
                    Tu navegador no soporta este formato de audio.
                  </audio>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Popup;
