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

const page = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/33-mountains.png')] bg-repeat-x bg-contain"> <Navigation />
    
    </div>
  )
}

export default page
