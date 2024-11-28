import React, { useState } from 'react';
import '../src/app/globals.css';
import Descargar from '@/components/Descargar';
import Navigation from '@/components/Navigation';
import DocumentViewer from '@/components/DocumentViewer';
import ResourceList from '@/components/ResourceList';
import eventos from '@/data/eventos'; // Importar los datos

const Tiempo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Ordenar eventos según el estado de `sortOrder`
  const sortedEventos = [...eventos].sort((a, b) => {
    return sortOrder === 'asc' ? a.year - b.year : b.year - a.year;
  });

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#fffff9] bg-[url('/all-books.png')] bg-repeat-x bg-cover bg-center"> 
      <Navigation />
      <div className="bg-[#E7DCD1] min-h-screen pt-32 px-4">
        {/* Botones para ordenar */}
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

        {/* Renderizado de eventos */}
        {sortedEventos.map((evento, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl">{evento.year}</h2>
            <p>{evento.description}</p>

            {/* Renderizar la lista de recursos para cada evento */}
            <ResourceList
              resources={evento.resources}
              onOpen={(url) => {
                setFileUrl(url);
                setIsOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Componente de visor de documentos */}
      <DocumentViewer fileUrl={fileUrl} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Tiempo;
