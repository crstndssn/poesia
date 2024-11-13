// "use client"
// import Image from 'next/image'
// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// import Carta from './carta.js'; // Usa este import para el componente Carta
// import Cartas from './cartas.js'; // Parece que también estás importando Cartas, asegúrate de usarlo si es necesario

// import Navigation from '@/components/Navigation.js'
// import Descargar from '@/components/Descargar.js'
// import Contenido from '@/components/Contenido'

// export default function Home() {
//   // Lista de imágenes
//   const images = [
//     "/erase-una-vez.jpg",
//     "/arbol.jpg",
//     "/montaña.jpg"
//   ];

//   // Efecto para cambiar la imagen automáticamente cada 1 segundo
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 1000); // Cambia cada segundo

//     return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonta el componente
//   }, [images.length]);

//   const [currentImage, setCurrentImage] = useState(0); // Cambié el estado a una constante actualizable
//   const [cartaSeleccionada, setCartaSeleccionada] = useState(null);

//   return (
//     <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/all-books.png')] bg-repeat-x bg-cover bg-center">

//       <div className="w-full">

//         <Navigation />

//         <Contenido />

//         <Descargar />

//       </div>
//     </div>
//   );
// }

"use client"
import { useState } from 'react';

import React from 'react'
import Navigation from '@/components/Navigation.js'
import Image from 'next/image';
import CountdownTimer from '@/components/CountdownTimer';

const page = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/38.png')] bg-no-repeat bg-cover bg-bottom"> <Navigation />

      <div className="container mx-auto flex flex-col justify-center items-center min-h-[90vh] gap-10 mt-[30px]">
        <div className="flex justify-center items-center ">
          <p className="text-[23px] text-center px-4">Su pasión por la vida y la palabra poética ha hecho de ella una investigadora constante, maestra por vocación, tallerista y conferencista internacional.

            Es directora de la Red De Amor Y Poesía que promueve su lectura y su goce...

            Sus poemas se han incluido en distintas publicaciones entre las que se encuentran: Matamundo, Parvulario y Mujeres al verso, antología de mujeres poetas huilenses, entre otras.</p>

        </div>
        <CountdownTimer />


        <div className="flex justify-around w-1/3 max-h-28 mb-7">
          <Image className='w-36 h-max' src="/BNC_Color.png" alt="alt" width={184} height={90} />
          <Image className='w-24 h-max' src="/CULTURAS_COLOR.png" alt="alt" width={184} height={90} />
          <Image className='w-36 h-max' src="/RNBP_Color.png" alt="alt" width={184} height={90} />
        </div>




      </div>
    </div>
  )
}

export default page
