import Image from 'next/image';
import { useState } from 'react';

const icons = {
  pdf: '/icons/repo.svg', // Ícono para PDF
  image: '/icons/imagenes.svg', // Ícono para imágenes
  video: '/icons/video.svg', // Ícono para videos
};

const ResourceList = ({ year, resources = {} }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleOpenModal = (category) => setActiveCategory(category);
  const handleCloseModal = () => setActiveCategory(null);

  return (
    <div className="flex gap-3 mt-5">
      {/* Botones por categoría */}
      {Object.entries(resources).map(([type, urls]) => (
        Array.isArray(urls) && urls.length > 0 && (
          <button
            key={type}
            onClick={() => handleOpenModal(type)}
            className="py-3 px-5 rounded-full flex justify-center items-center gap-3 border border-black bg-[#FFFFF3] text-black"
          >
            <Image src={icons[type]} alt={type} width={20} height={20} />
            <span>Ver {type.toUpperCase()}</span>
          </button>
        )
      ))}

      {/* Modal para la categoría activa */}
      {activeCategory && (
        <div className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center overflow-auto">
          <div className="bg-[#fffff3] p-6 w-full shadow-lg relative min-h-screen">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              ✖️
            </button>
            <h2 className="text-lg font-bold mb-4">
              {activeCategory.toUpperCase()} del año {year}
            </h2>
            <div className="mt-[50px] grid grid-cols-3">
              {resources[activeCategory]?.map((url, index) => {
                if (activeCategory === 'pdf') {
                  return (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 underline"
                    >
                      Ver PDF {index + 1}
                    </a>
                  );
                } else if (activeCategory === 'image') {
                  return (
                    <img
                      key={index}
                      src={url}
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-auto"
                    />
                  );
                } else if (activeCategory === 'video') {
                  return (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-600 underline"
                    >
                      Ver Video {index + 1}
                    </a>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceList;
