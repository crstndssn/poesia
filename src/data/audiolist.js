// components/AudioList.js
import React from 'react';

const AudioList = () => {
  // Lista de audios con ruta y descripción
  const audios = [
    { id: 10, route: "/audios/gotica-%20La%20plaza%20tiene%20una%20torre.mp3", description: "La plaza tiene una torre", highlight: true },
    { id: 1, route: "/audios/59_Amparo_Andrade_Como_nosotros_Niyireth_Alarcón.mp3", description: "Como nosotros Niyireth Alarcón" },
    { id: 2, route: "/audios/ALTER-ARTE-FUNDA-MATAMB...EMISIÓN 15 DE MARZO 2019.mp3", description: "EMISIÓN 15 DE MARZO 2019" },
    { id: 3, route: "/audios/asi.mp3", description: "asi.mp3" },
    { id: 4, route: "/audios/CHUMBA-LA-CACHUMBA.mp3", description: "CHUMBA LA CACHUMBA" },
    { id: 9, route: "/audios/EL_JUEZ.mp3", description: "EL JUEZ.mp3" },
    { id: 11, route: "/audios/GUANACO.mp3", description: "GUANACO.mp3" },
    { id: 12, route: "/audios/LAS%20CUENTAS.mp3", description: "LAS CUENTAS.mp3" },
    { id: 13, route: "/audios/MERECES%20UN%20AMOR.mp3", description: "MERECES UN AMOR.mp3" },
    { id: 14, route: "/audios/presentacion%20asi.mp3", description: "presentacion asi.mp3" },
    { id: 15, route: "/audios/PRESENTACION%20DE%20CHUMBA%20LA%20CACHUMBA.mp3", description: "PRESENTACION DE CHUMBA LA CACHUMBA.mp3" },
    { id: 16, route: "/audios/PRESENTACION%20DE%20GUANACO.mp3", description: "PRESENTACION DE GUANACO.mp3" },
    { id: 17, route: "/audios/PRESENTACION%20DE%20LAS%20CUENTAS.mp3", description: "PRESENTACION DE LAS CUENTAS.mp3" },
    { id: 18, route: "/audios/PRESENTACION%20DE%20SIGUE%20TU%20CAMINITO.mp3", description: "PRESENTACION DE SIGUE TU CAMINITO.mp3" },
    { id: 19, route: "/audios/PRESENTACION%20DE%20SOMBRA%20EN%20EL%20AGUA.mp3", description: "PRESENTACION DE SOMBRA EN EL AGUA.mp3" },
    { id: 20, route: "/audios/PRESENTACION%20DE%20TAPIZ.mp3", description: "PRESENTACION DE TAPIZ.mp3" },
    { id: 21, route: "/audios/PRESENTACION%20EL%20JUEZ.mp3", description: "PRESENTACION EL JUEZ.mp3" },
    { id: 22, route: "/audios/PRESENTACION%20MERECES%20UN%20AMOR.mp3", description: "PRESENTACION MERECES UN AMOR.mp3" },
    { id: 23, route: "/audios/PRESENTACION QUE QUIERE EL LOBITO.wav", description: "PRESENTACION QUE QUIERE EL LOBITO" },
    { id: 24, route: "/audios/QUE QUIERE EL LOBITO.wav", description: "QUE QUIERE EL LOBITO" },
    { id: 25, route: "/audios/Recomendacion_Poesia.mp3", description: "Recomendacion Poesia" },
    { id: 26, route: "/audios/SIGUE TU CAMINITO.mp3", description: "Sigue tu cominito" },
    { id: 27, route: "/audios/SOMBRA EN EL AGUA.mp3", description: "Sombra en el agua" },
    { id: 28, route: "/audios/TAPIZ.mp3", description: "Tapiz" },
    { id: 29, route: "/audios/VIVO-DE TARDE EN LA MESA-POESIA COMO HERRAMIENTA EDUCATIVA.mp3", description: "Tarde en la mesa" },
  ];

  return (
    <div className="w-full mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold text-center pb-6">Lista de Audios</h1>
      <ul className="gap-3 flex flex-col mt-4">
        {audios.map((audio) => (
          <li
            key={audio.id}
            className={`w-auto flex flex-col md:flex-row items-center justify-between rounded-lg shadow-md transition mt-3 py-4
              ${audio.highlight ? 'text-black bg-[#FFFFF3] shadow-md border-2 border-black' : 'text-black bg-[#FFFFF3] shadow-md border border-black'}`}
          >
            <div className='flex flex-col text-center mb-3'>
              <h2 className="text-xl font-semibold">Audio {audio.id}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{audio.description}</p>
            </div>
            <audio
              controls
              src={audio.route}
              className={`custom-audio-player w-auto h-12`}
            >
              Your browser does not support the audio element.
            </audio>

            <style jsx>{`
                .custom-audio-player {
                  background-color: #FFFFF3; /* Color de fondo personalizado */
                  border-radius: 8px; /* Bordes redondeados */
                  box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
                }

                /* Personaliza los elementos internos del reproductor */
                .custom-audio-player::-webkit-media-controls-panel {
                  background-color: #FFFFF3 !important; /* Cambia el fondo */
                  border-radius: 8px; /* Bordes redondeados */
                }

                .custom-audio-player::-webkit-media-controls-play-button,
                .custom-audio-player::-webkit-media-controls-timeline,
                .custom-audio-player::-webkit-media-controls-current-time-display,
                .custom-audio-player::-webkit-media-controls-time-remaining-display,
                .custom-audio-player::-webkit-media-controls-volume-slider {
                  color: #000; /* Cambia el color del texto o controles */
                }

                .custom-audio-player::-webkit-media-controls-mute-button,
                .custom-audio-player::-webkit-media-controls-fullscreen-button {
                  filter: brightness(0.8); /* Ajusta el brillo de los botones */
                }
              `}
            </style>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioList;
