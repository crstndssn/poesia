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

    const [currentImage, setCurrentImage] = useState(1); // Cambié el estado a una constante actualizable
    const [cartaSeleccionada, setCartaSeleccionada] = useState(1);

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
        <div className="mt-24 md:mt-40 flex flex-col">

            {/* CONTENT */}
            <div className="m-7 md:mx-32">
                <Carta cartaSeleccionada={cartaSeleccionada} />
            </div>


            {/* LINKS */}
            <div className="bg-[url('/letter-background.png')] bg-cover bg-center fixed bottom-0 w-full flex justify-center gap-4 border-y border-black p-2 shadow-lg overflow-auto h-23 pl-64 md:pl-2">
                <span
                    className={`cursor-pointer flex justify-center items-center w-full min-w-28 border h-8  border-black rounded-full text-center
                            ${cartaSeleccionada === 1
                            ? 'bg-black text-amarillo'
                            : 'bg-amarillo text-black'
                        }
                                hover:shadow-lg
                            `}
                    onClick={() => setCartaSeleccionada(1)}
                >
                    carta 1
                </span>
                <span
                    className={`cursor-pointer flex justify-center items-center w-full min-w-28 border h-8  border-black rounded-full text-center
                            ${cartaSeleccionada === 2
                            ? 'bg-black text-amarillo'
                            : 'bg-amarillo text-black'
                        }
                                hover:shadow-lg
                            `}
                    onClick={() => setCartaSeleccionada(2)}
                >
                    carta 2
                </span>
                <span
                    className={`cursor-pointer flex justify-center items-center w-full min-w-28 border h-8  border-black rounded-full text-center
                            ${cartaSeleccionada === 3
                            ? 'bg-black text-amarillo'
                            : 'bg-amarillo text-black'
                        }
                                hover:shadow-lg
                            `}
                    onClick={() => setCartaSeleccionada(3)}
                >
                    carta 3
                </span>
                <span
                    className={`cursor-pointer flex justify-center items-center w-full min-w-28 border h-8  border-black rounded-full text-center
                    ${cartaSeleccionada === 4
                            ? 'bg-black text-amarillo'
                            : 'bg-amarillo text-black'
                        }
                            hover:shadow-lg
                        `}
                    onClick={() => setCartaSeleccionada(4)}
                >
                    carta 4
                </span>
                <span
                    className={`cursor-pointer flex justify-center items-center w-full min-w-28 border h-8  border-black rounded-full text-center
                    ${cartaSeleccionada === 5
                            ? 'bg-black text-amarillo'
                            : 'bg-amarillo text-black'
                        }
                            hover:shadow-lg
                        `}
                    onClick={() => setCartaSeleccionada(5)}
                >
                    carta 5
                </span>
                {/* <span
                    className={`w-full min-w-28 border-2 h-8  border-black rounded-full text-center
                    ${cartaSeleccionada === 6
                            ? 'bg-black text-amarillo'
                            : 'bg-amarillo text-black'
                        }
                    hover:shadow-lg
                `}
                    onClick={() => setCartaSeleccionada(6)}
                >
                    carta 6
                </span> */}
                {/* <span
                    className={`w-full min-w-28 border-2 h-8  border-black rounded-full text-center
                    ${cartaSeleccionada === 7
                            ? 'bg-black text-amarillo'
                            : 'bg-amarillo text-black'
                        }
                    hover:shadow-lg
                `}
                    onClick={() => setCartaSeleccionada(7)}
                >
                    carta 7
                </span> */}
            </div>
        </div>
    )
}

export default Contenido