// components/AudioList.js
import React from 'react';

const AudioList = () => {
  // Lista de audios con ruta y descripción
  const audios = [
    { id: 10, route: "/audios/gotica-%20La%20plaza%20tiene%20una%20torre.mp3", description: "gotica- La plaza tiene una torre.mp3", highlight: true },
    { id: 1, route: "/audios/59_Amparo_Andrade_Como_nosotros_Niyireth_Alarc%C3%B3n%20(1).mp3", description: "59_Amparo_Andrade_Como_nosotros_Niyireth_Alarcón (1).mp3" },
    { id: 2, route: "/audios/ALTER-%20ARTE%20FUNDA%20MATAMB...EMISI%C3%93N%2015%20DE%20MARZO%202019.mp3", description: "ALTER- ARTE FUNDA MATAMB...EMISIÓN 15 DE MARZO 2019.mp3" },
    { id: 3, route: "/audios/asi.mp3", description: "asi.mp3" },
    { id: 4, route: "/audios/CHUMBA%20LA%20CACHUMBA.mp3", description: "CHUMBA LA CACHUMBA.mp3" },
    { id: 5, route: "/audios/Copy%20of%2059_Amparo_Andrade_C...nosotros_Niyireth_Alarc%C3%B3n.mp3", description: "Copy of 59_Amparo_Andrade_C...nosotros_Niyireth_Alarcón.mp3" },
    { id: 6, route: "/audios/Copy%20of%20ALTER-%20ARTE%20FUNDA%20M...MISI%C3%93N%2015%20DE%20MARZO%202019.mp3", description: "Copy of ALTER- ARTE FUNDA M...MISIÓN 15 DE MARZO 2019.mp3" },
    { id: 7, route: "/audios/Copy%20of%20Recomendacion_Poesia.mp3", description: "Copy of Recomendacion_Poesia.mp3" },
    { id: 8, route: "/audios/Copy%20of%20VIVO-DE%20TARDE%20EN%20LA...HERRAMIENTA%20EDUCATIVA.mp3", description: "Copy of VIVO-DE TARDE EN LA...HERRAMIENTA EDUCATIVA.mp3" },
    { id: 9, route: "/audios/EL%20JUEZ.mp3", description: "EL JUEZ.mp3" },
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
    { id: 23, route: "/audios/PRESENTACION%20QUE%20QUIERE%20EL%20LOBITO.wav", description: "PRESENTACION QUE QUIERE EL LOBITO.wav" },
    { id: 24, route: "/audios/QUE%20QUIERE%20EL%20LOBITO.wav", description: "QUE QUIERE EL LOBITO.wav" },
    { id: 25, route: "/audios/Recomendacion_Poesia.mp3", description: "Recomendacion_Poesia.mp3" },
    { id: 26, route: "/audios/SIGUE%20TU%20CAMINITO.mp3", description: "SIGUE TU CAMINITO.mp3" },
    { id: 27, route: "/audios/SOMBRA%20EN%20EL%20AGUA.mp3", description: "SOMBRA EN EL AGUA.mp3" },
    { id: 28, route: "/audios/TAPIZ.mp3", description: "TAPIZ.mp3" },
    { id: 29, route: "/audios/VIVO-DE%20TARDE%20EN%20LA%20MESA-P...HERRAMIENTA%20EDUCATIVA.mp3", description: "VIVO-DE TARDE EN LA MESA-P...HERRAMIENTA EDUCATIVA.mp3" },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Lista de Audios</h1>
      <ul className="gap-3 flex flex-col">
        {audios.map((audio) => (
          <li
            key={audio.id}
            className={`flex items-center justify-between p-6 rounded-lg shadow-md transition mt-3 ${audio.highlight ? 'bg-indigo-600 text-white text-xl font-bold border-2 border-indigo-800' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <div>
              <h2 className="text-lg font-semibold">Audio {audio.id}</h2>
              <p className="text-sm text-gray-700 leading-relaxed">{audio.description}</p>
            </div>
            <audio
              controls
              src={audio.route}
              className={audio.highlight ? 'w-64 h-12' : 'w-40 h-8'}
            >
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioList;
