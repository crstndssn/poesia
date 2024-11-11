import { useState } from 'react';

const DocumentViewer = ({ fileUrl, isOpen, onClose }) => {
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

        {fileUrl.endsWith('.pdf') ? (
          <iframe
            src={fileUrl}
            className="w-full h-96 border rounded"
            title="PDF Document"
          />
        ) : (
          // Aquí podrías añadir una librería como `react-doc-viewer`
          <p>No se puede mostrar este tipo de archivo</p>
        )}
      </div>
    </div>
  );
};

export default DocumentViewer;
