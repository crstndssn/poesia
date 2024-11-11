"use client"

import { useState, useEffect } from 'react';

import styles from './Butterfly.module.css';

import Carta from '@/app/carta'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Butterfly from './mariposa';

const Contenido = () => {
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

    const [position, setPosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const x = 50 + 30 * Math.cos(scrollPosition * 0.05);
            const y = 50 + 30 * Math.sin(scrollPosition * 0.05);

            setPosition({ x, y });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="w-full md:h-screen flex flex-col-reverse md:flex-row pt-18">

            {/* CONTENT */}
            <div className="w-full md:w-3/5 border-y-2 md:border-x-2 border-black md:pt-24 px-4">
                <Carta cartaSeleccionada={cartaSeleccionada} />
            </div>

            <div className="w-full md:w-1/5 flex flex-col pt-0 md:pt-24">
                

                {/* LINKS */}
                <div className="w-full flex flex-col md:fixed bottom-40">
                    <span
                        className={`w-full border border-amarillo cursor-pointer font-semibold text-2xl md:text-3xl py-2 pl-4 ${cartaSeleccionada === 0 ? 'text-amarillo bg-black border-black' : 'text-black bg-transparent'}`}
                        onClick={() => setCartaSeleccionada(0)}
                    >
                        inicio
                    </span>
                    <span
                        className={`w-full border border-amarillo cursor-pointer font-semibold  text-2xl md:text-3xl py-2 pl-4 ${cartaSeleccionada === 1 ? 'text-amarillo bg-black border-black' : 'text-black bg-transparent'}`}
                        onClick={() => setCartaSeleccionada(1)}
                    >
                        carta 1
                    </span>
                    <span
                        className={`w-full border border-amarillo cursor-pointer font-semibold  text-2xl md:text-3xl py-2 pl-4 ${cartaSeleccionada === 2 ? 'text-amarillo bg-black border-black' : 'text-black bg-transparent'}`}
                        onClick={() => setCartaSeleccionada(2)}
                    >
                        carta 2
                    </span>
                    <span
                        className={`w-full border border-amarillo cursor-pointer font-semibold  text-2xl md:text-3xl py-2 pl-4 ${cartaSeleccionada === 3 ? 'text-amarillo bg-black border-black' : 'text-black bg-transparent'}`}
                        onClick={() => setCartaSeleccionada(3)}
                    >
                        carta 3
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Contenido