import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Carta from './carta'; // Ajusta la ruta según tu estructura de carpetas

const Cartas = ({ images }) => {
    const [currentImage] = useState(0);
    const [cartaSeleccionada, setCartaSeleccionada] = useState(null);

    return (
        <div className="container mx-auto flex justify-between border-2 border-black">
            {/* Mostrar el contenido de la carta seleccionada */}
            <div className="flex-grow">
                <Carta cartaSeleccionada={cartaSeleccionada} />
            </div>

            <div className="flex flex-col">

                {/* Imagen 1 */}
                <div className="w-[200px] h-[200px] flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden">
                    <Link href="/gallery">
                        <Image
                            src={images[currentImage]}
                            alt={`Imagen ${currentImage + 1}`}
                            width={200}
                            height={200}
                            className="object-cover cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Números de carta */}
                <div className="flex flex-col">
                    <p className="cursor-pointer text-xl" onClick={() => setCartaSeleccionada(1)}>carta 1</p>
                    <p className="cursor-pointer text-xl" onClick={() => setCartaSeleccionada(2)}>carta 2</p>
                    <p className="cursor-pointe text-xl" onClick={() => setCartaSeleccionada(3)}>carta 3</p>
                </div>
            </div>


        </div>
    );
};

export default Cartas;
