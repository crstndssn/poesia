import React, { useState } from 'react';
import '../src/app/globals.css';
import Descargar from '@/components/Descargar';
import Navigation from '@/components/Navigation';
import DocumentViewer from '@/components/DocumentViewer';
import ResourceList from '@/components/ResourceList';
import eventos from '@/data/eventos';

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
      <div className="container mx-auto min-h-screen pt-32 px-4">
        {/* Botones para ordenar */}
        <div className="flex justify-between mb-4 gap-3">
          <button
            className="w-full border border-black text-black bg-[#fffff3] py-2 px-4 rounded-full"
            onClick={() => setSortOrder('asc')}
          >
            Ascendente
          </button>
          <button
            className="w-full border border-black bg-[#fffff3] rounded-full"
            onClick={() => setSortOrder('desc')}
          >
            Descendente
          </button>
        </div>

        {/* Renderizado de eventos */}
        {sortedEventos.map((evento, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-bold">{evento.year}</h2>
            <p className="text-gray-700">{evento.description}</p>

            {/* Pasar la propiedad `resources` correctamente */}
            <ResourceList
              year={evento.year}
              resources={{
                pdf: evento.resources.pdfs,
                image: evento.resources.images,
                video: evento.resources.videos,
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
