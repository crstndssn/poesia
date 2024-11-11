import React, { useState } from 'react';
import '../src/app/globals.css';
import Descargar from '@/components/Descargar';
import Navigation from '@/components/Navigation';
import DocumentViewer from '@/components/DocumentViewer';

const Tiempo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fileUrl, setFileUrl] = useState('/poema1998.pdf'); // Ruta del archivo en la carpeta pública
  
    const openDocument = () => {
      setIsOpen(true);
    };

    return (
        <>
            <Navigation />
            <div className="bg-[#E7DCD1] min-h-screen">
                <div className="pt-12">
                    <h2 className="">1998</h2>
                    <p className="">
                      Martes de Poesía remonta sus orígenes al Municipio de Tarqui, en el año 1998, 
                      con la estrategia "Tres poemas para celebrar el día", en el que tres niñas y niños 
                      elegían un poema para festejar algo de su vida, que sería luego compartido en un 
                      ciclo de lectura en la Biblioteca de la institución frente a maestros y otros estudiantes, 
                      precedido de un ritual de inicio.
                    </p>
                </div>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                    onClick={openDocument}
                >
                    Ver Documento
                </button>
            </div>

            <DocumentViewer fileUrl={fileUrl}  />
        </>
    );
}

export default Tiempo;
