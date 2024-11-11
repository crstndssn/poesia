import React, { useState } from 'react';
import '../src/app/globals.css';
import Descargar from '@/components/Descargar';
import Navigation from '@/components/Navigation';
import DocumentViewer from '@/components/DocumentViewer';

const Tiempo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fileUrl, setFileUrl] = useState('/poema1998.pdf'); // Ruta del archivo en la carpeta pública
  const [sortOrder, setSortOrder] = useState('asc'); // Estado para el orden de la línea de tiempo

  // Eventos de la línea de tiempo
  const eventos = [
    { year: 1998, description: 'Martes de Poesía remonta sus orígenes al Municipio de Tarqui, en el año 1998...' },
    { year: 2005, description: 'En 2005, se expandieron las actividades a más instituciones...' },
    { year: 2010, description: 'En 2010, se celebró una década de poesía con una gran reunión...' },
    // Agrega más eventos aquí
  ];

  // Ordenar eventos según el estado de `sortOrder`
  const sortedEventos = [...eventos].sort((a, b) => {
    return sortOrder === 'asc' ? a.year - b.year : b.year - a.year;
  });

  const openDocument = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/all-books.png')] bg-repeat-x bg-cover bg-center"> 
      <Navigation />
      <div className="bg-[#E7DCD1] min-h-screen pt-12 px-4">
        <div className="flex justify-between mb-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded"
            onClick={() => setSortOrder('asc')}
          >
            Orden Ascendente
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => setSortOrder('desc')}
          >
            Orden Descendente
          </button>
        </div>
        {sortedEventos.map((evento, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl">{evento.year}</h2>
            <p>{evento.description}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
              onClick={openDocument}
            >
              Ver Documento
            </button>
          </div>
        ))}
      </div>
      <DocumentViewer fileUrl={fileUrl} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Tiempo;
