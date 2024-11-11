import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { useState, useEffect } from 'react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import Image from 'next/image'; // Importa el componente Image de Next.js para optimizar las imágenes


import '../src/app/globals.css';
import Descargar from '@/components/Descargar';
import Nav from '@/components/Navigation';

const Imagenes = () => {
  // Lista de imágenes
  const images = [
    "/erase-una-vez.jpg",
    "/arbol.jpg",
    "/montaña.jpg"
  ];

  // Efecto para cambiar la imagen automáticamente cada 1 segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000); // Cambia cada segundo

    return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonta el componente
  }, [images.length]);

  const [currentImage, setCurrentImage] = useState(0); // Cambié el estado a una constante actualizable
  const [cartaSeleccionada, setCartaSeleccionada] = useState(null);


  return (
    <>
    <Nav />
    <div className="w-full max-w-4xl mx-auto py-10 bg-[#fffff9]">
      <>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          {/* Mapeo dinámico de las imágenes */}
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image src={src} alt={`Imagen ${index + 1}`} width={1000} height={1000} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
    <Descargar />
    </>

  );
};

export default Imagenes;
