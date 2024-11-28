import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const DocumentViewer = ({ fileUrl, isOpen, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga inicial para evitar diferencias entre el SSR y CSR
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p>Cargando...</p>;
    }

    if (fileUrl.endsWith('.pdf')) {
      return (
        <iframe
          src={fileUrl}
          className="w-full h-96 border rounded"
          title="PDF Document"
        />
      );
    }

    if (fileUrl.endsWith('.jpg') || fileUrl.endsWith('.png')) {
      return <img src={fileUrl} alt="Visual Content" className="w-full rounded" />;
    }

    if (fileUrl.endsWith('.mp4')) {
      const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
      return <ReactPlayer url={fileUrl} controls width="100%" />;
    }

    return <p>No se puede mostrar este tipo de archivo</p>;
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✖️
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default DocumentViewer;
