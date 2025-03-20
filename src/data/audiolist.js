// components/AudioList.js
import React from 'react';

const AudioList = () => {
  // Lista de audios con ruta y descripción
  const audios = [
    { id: 1, route: "/audios/new/1-Así.mp3", description: "Así", highlight: true },
    { id: 2, route: "/audios/new/2-Chumba-la-cachumba.mp3", description: "Chumba la cachumba" },
    { id: 3, route: "/audios/new/3-Guanaco.mp3", description: "Guanaco" },
    { id: 4, route: "/audios/new/4-Juez.mp3", description: "Juez" },
    { id: 5, route: "/audios/new/5-Las-cuentas.mp3", description: "Las cuentas" },
    { id: 6, route: "/audios/new/6-Mereces-un-amor.mp3", description: "Mereces un amor" },
    { id: 7, route: "/audios/new/7-Qué-quiere-el-lobito.mp3", description: "¿Qué quiere el lobito?" },
    { id: 8, route: "/audios/new/8-Sigue-tu-caminito.mp3", description: "Sigue tu camnio" },
    { id: 9, route: "/audios/new/9-Sombra-en-el-agua.mp3", description: "Sombra en el agua" },
    { id: 10, route: "/audios/new/10-Tapíz.mp3", description: "Tapíz"},
    { id: 11, route: "/audios/new/11-Tarde-en-la-mesa.mp3", description: "Poesía como herramienta educativa"},
  ];

  return (
    <div className="w-full flex justify-center items-center container mx-auto mt-10 px-4 Z-10">
      <ul className="w-4/5 gap-3 flex flex-col mt-4">
        {audios.map((audio) => (
          <li
            key={audio.id}
            className="audio-component w-auto flex flex-col items-center justify-between px-4 rounded-lg shadow-md  transition mt-3 py-4"
          >
            <div className='flex flex-col text-center'>
              <p id={audio.id} className="text-lg text-black leading-relaxed">{audio.description}</p>
            </div>
            <audio
              controls
              src={audio.route}
              className={`custom-audio-player w-full h-12`}
            >
              Your browser does not support the audio element.
            </audio>

            <style jsx>{`

                .audio-component {
                  border: 2px solid #b7b7b7;
                  background-color: #cecece;
                }

                .audio-component p {
                  color: #989898;
                }

                .audio-component:hover {
                  border: 2px solid #000;
                  background-color: #fffff3;
                }

                .audio-component:hover p {
                    color: #000;
                    font-weight: bold;
                }

                .audio-component:hover .custom-audio-player {
                  background-color: #cecece; /* Color de fondo personalizado */
                }

                .audio-component:hover .custom-audio-player::-webkit-media-controls-panel {
                  background-color: #fffff3 !imprtant;
                }

                .audio-component:hover .custom-audio-player {
                  border: 1px solid black;
                }
                
                .custom-audio-player {
                  background-color: #cecece; /* Color de fondo personalizado */
                  border-radius: 8px; /* Bordes redondeados */
                  border: 1px solid #cecece;
                }

             

                /* Personaliza los elementos internos del reproductor */
                .custom-audio-player::-webkit-media-controls-panel {
                  background-color: #cecece; /* Cambia el fondo */
                  border-radius: 8px; /* Bordes redondeados */
                }

                .custom-audio-player::-webkit-media-controls-play-button,
                .custom-audio-player::-webkit-media-controls-timeline,
                .custom-audio-player::-webkit-media-controls-current-time-display,
                .custom-audio-player::-webkit-media-controls-time-remaining-display,
                .custom-audio-player::-webkit-media-controls-volume-slider {
                  color: #000; /* Cambia el color del texto o controles */
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
